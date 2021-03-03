import React, {Component} from "react";

import './CardField.scss'
import Card, {CardProps} from "../Card/Card";

interface CardFieldState {
    cards: Array<any>,
    selectFirstCard: Array<number>,
    selectSecondCard: Array<number>,
}

export default class CardField extends Component<{}, CardFieldState> {

    private canFlip:boolean = true;

    constructor(props: any) {
        super(props);
        this.state = {
            cards: [],
            selectFirstCard: [-1,-1],
            selectSecondCard: [-1,-1],
        }
        this.flipCard = this.flipCard.bind(this);
    }

    fetchData = (url: string) => {
        fetch(url)
            .then(res => res.json())
            .then(cards => this.setState({cards}));
    }

    componentDidMount() {
        this.fetchData('/level-1');
    }

    selectCards(lineIndex:any,cardIndex: any) {
        if(this.canFlip) {
            const newCards = JSON.parse(JSON.stringify(this.state.cards));
            if (this.state.selectFirstCard[0] > -1 && this.state.selectFirstCard[1] > -1) {
                newCards[lineIndex].line[cardIndex].isOpen = true;
                this.setState(() => {
                    return {
                        selectSecondCard: [lineIndex, cardIndex],
                        cards: newCards
                    }
                });
                this.canFlip=false;
                setTimeout(() => {
                    this.verifySelectedCards();
                }, 1500);
            } else {
                newCards[lineIndex].line[cardIndex].isOpen = true
                this.setState(() => {
                    return {
                        selectFirstCard: [lineIndex, cardIndex],
                        cards: newCards
                    }
                });
            }
        }
    }

    verifySelectedCards() {
        const firstCard = this.state.selectFirstCard;
        const secondCard = this.state.selectSecondCard;
        const cards = this.state.cards;
        if(firstCard[0]>-1 && firstCard[1]>-1 && secondCard[0]>-1 && secondCard[1]>-1) {
            if(cards[firstCard[0]].line[firstCard[1]].shortcut!== cards[secondCard[0]].line[secondCard[1]].shortcut) {
                const newCards = JSON.parse(JSON.stringify(this.state.cards));
                newCards[firstCard[0]].line[firstCard[1]].isOpen = false;
                newCards[secondCard[0]].line[secondCard[1]].isOpen = false;

                this.setState(() => {
                    return {
                        cards: newCards
                    }
                });
            }
              this.setState(() => {
                  return {
                      selectFirstCard: [-1, -1],
                      selectSecondCard: [-1, -1]
                  }
              });
        }
        this.canFlip=true;
    }

    flipCard(lineIndex:any,cardIndex: any) {
            const newCards = JSON.parse(JSON.stringify(this.state.cards));
            newCards[lineIndex].line[cardIndex].isOpen = true;

            this.setState(() => {
                return {
                    cards: newCards
                }
            });
    }

    render() {
        return (
            <div className='field'>
                {
                    this.state.cards.map((cardLine: any, indexLine: number) => {
                        return (<div className='field__line' key={indexLine}>
                            {
                                cardLine.line.map((card: CardProps,index: number) => {
                                    return <Card key={card.index} frontImage={card.frontImage}
                                                 titleCard={card.titleCard} shortcut={card.shortcut}
                                                 onSelect={(e) => {
                                                     this.selectCards(indexLine,index);
                                                 }}
                                                isOpen={card.isOpen}/>;
                                })
                            }
                        </div>);
                    })
                }
            </div>
        );
    }
}