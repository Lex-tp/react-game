import React, {Component} from "react";

import './CardField.scss'
import Card, {CardProps} from "../Card/Card";
import Counter from "../Counter/Counter";
import ControlPanel from "../ControlPanel/ControlPanel";

const Open_sound = require('./sounds/openCard.mp3').default;
const Close_sound = require('./sounds/closeCard.mp3').default;
const Success = require('./sounds/successCombination.mp3').default;

interface CardFieldState {
    cards: Array<any>,
    selectFirstCard: Array<number>,
    selectSecondCard: Array<number>,
    canFlip: boolean,
    countCards: number,
    successCombination: number,
    countMove: number,
}

export default class CardField extends Component<{}, CardFieldState> {

    private audioOpen: HTMLAudioElement;
    private audioClose: HTMLAudioElement;
    private audioSuccess: HTMLAudioElement;

    constructor(props: any) {
        super(props);
        this.state = {
            cards: [],
            selectFirstCard: [-1, -1],
            selectSecondCard: [-1, -1],
            canFlip: true,
            countCards: 0,
            successCombination: 1,
            countMove: 3
        }
        this.audioOpen = new Audio(Open_sound);
        this.audioSuccess = new Audio(Success);
        this.audioSuccess.volume = 0.5;
        this.audioClose = new Audio(Close_sound);
        this.selectCards = this.selectCards.bind(this);
    }

    fetchData = (url: string) => {
        fetch(url)
            .then(res => res.json())
            .then(cards => this.setState({cards}));
    }

    componentDidMount() {
        this.fetchData('/level-1');
        setTimeout(() => {
            const {cards} = this.state;
            let newCards = JSON.parse(JSON.stringify(cards));
            let countItems = 0;
            newCards = newCards.map((cardLine: any) => {
                return {
                    line: cardLine.line.map((card: CardProps) => {
                        countItems++;
                        card.isOpen = false;
                        return card;
                    })
                }
            });
            this.setState(() => {
                return {
                    cards: newCards,
                    countCards: countItems
                }
            })
        }, 2000);
    }

    selectCards(lineIndex: any, cardIndex: any) {
        const {selectFirstCard, cards, canFlip, countMove} = this.state;
        const newCards = JSON.parse(JSON.stringify(cards));
        const currentCard = newCards[lineIndex].line[cardIndex];

        if (canFlip && !currentCard.isOpen) {
            currentCard.isOpen = true
            this.audioOpen.currentTime = 0;
            this.audioOpen.play();
            if (this.checkTempSelection(selectFirstCard)) {
                this.setState((prev) => {
                    return {
                        countMove: prev.countMove - 1,
                        selectSecondCard: [lineIndex, cardIndex],
                        cards: newCards
                    }
                });
                this.setState(() => {
                    return {canFlip: false}
                });
                setTimeout(() => {
                    this.verifySelectedCards();
                }, 1000);
                if (countMove <= 1) {
                    console.log('lose');
                    return;
                }
            } else {
                this.setState(() => {
                    return {
                        selectFirstCard: [lineIndex, cardIndex],
                        cards: newCards
                    }
                });
            }
        }
    }

    checkTempSelection(selectCard: Array<number>) {
        return selectCard[0] > -1 && selectCard[1] > -1;
    }

    successCombination(cards: Array<any>, firstCard: Array<number>, secondCard: Array<number>) {
        return cards[firstCard[0]].line[firstCard[1]].shortcut === cards[secondCard[0]].line[secondCard[1]].shortcut;
    }

    closeCards(cards: Array<any>, selectFirstCard: Array<number>, selectSecondCard: Array<number>) {
        cards[selectFirstCard[0]].line[selectFirstCard[1]].isOpen = false;
        cards[selectSecondCard[0]].line[selectSecondCard[1]].isOpen = false;
        this.audioClose.play();
    }

    verifySelectedCards() {
        const {selectFirstCard, selectSecondCard, cards, countCards, successCombination} = this.state;
        const newCards = JSON.parse(JSON.stringify(cards));

        if (this.checkTempSelection(selectFirstCard) && this.checkTempSelection(selectSecondCard)) {
            if (!this.successCombination(cards, selectFirstCard, selectSecondCard)) {
                this.closeCards(newCards, selectFirstCard, selectSecondCard);
                this.setState(() => {
                    return {
                        cards: newCards
                    }
                });
            } else {
                this.setState((prev) => {
                    return {
                        successCombination: prev.successCombination + 1,
                    }
                });
                if (countCards / 2 === successCombination) {
                    console.log('win');
                    return;
                }
                this.audioSuccess.currentTime = 0;
                this.audioSuccess.play();
            }
            this.setState(() => {
                return {
                    selectFirstCard: [-1, -1],
                    selectSecondCard: [-1, -1]
                }
            }, () => {
                this.setState(() => {
                    return {canFlip: true}
                });
            });
        }
    }

    buttonClick(e: React.MouseEvent) {
        if (e.currentTarget.id === 'sound') {
            this.audioOpen.volume = this.audioOpen.volume === 0 ? 1 : 0;
            this.audioClose.volume = this.audioClose.volume === 0 ? 1 : 0;
            this.audioSuccess.volume = this.audioSuccess.volume === 0 ? 0.5 : 0;
        }
    }

    render() {
        return (
            <div className='field-box'>
                <Counter count={this.state.countMove}/>
                <div className='field'>
                    {
                        this.state.cards.map((cardLine: any, indexLine: number) => {
                            return (<div className='field__line' key={indexLine}>
                                {
                                    cardLine.line.map((card: CardProps, index: number) => {
                                        return <Card key={card.index} frontImage={card.frontImage}
                                                     titleCard={card.titleCard} shortcut={card.shortcut}
                                                     onSelect={(e) => {
                                                         this.selectCards(indexLine, index);
                                                     }}
                                                     isOpen={card.isOpen}/>;
                                    })
                                }
                            </div>);
                        })
                    }
                </div>
                <ControlPanel buttonClick={(e) => {
                    this.buttonClick(e);
                }}/>
            </div>
        );
    }
}