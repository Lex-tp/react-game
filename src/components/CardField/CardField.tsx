import React, {Component} from "react";

import './CardField.scss'
import Card, {CardProps} from "../Card/Card";

interface CardFieldState {
    cards: Array<any>,
    selectFirstCard: string,
    selectSecondCard: string,
}

export default class CardField extends Component<{}, CardFieldState> {


    constructor(props: any) {
        super(props);
        this.state = {
            cards: [],
            selectFirstCard: '',
            selectSecondCard: '',
        }
    }

    fetchData = (url: string) => {
        fetch(url)
            .then(res => res.json())
            .then(cards => this.setState({cards}));
    }

    componentDidMount() {
        this.fetchData('/level-1');
    }

    selectCard(cardId: any) {
        this.verifySelectedCards();
        if (this.state.selectFirstCard) {
            this.setState(() => {
                return {
                    selectSecondCard: cardId,
                }
            });
        } else {
            this.setState(() => {
                return {
                    selectFirstCard: cardId,
                }
            });
        }
    }

    verifySelectedCards() {
        if (this.state.selectFirstCard && this.state.selectSecondCard) {
            this.setState(() => {
                return {
                    selectFirstCard: '',
                    selectSecondCard: '',
                }
            });
        }
    }

    render() {
        return (
            <div className='field'>
                {
                    this.state.cards.map((cardLine: any, indexLine: number) => {
                        return (<div className='field__line' key={indexLine}>
                            {
                                cardLine.line.map((card: CardProps) => {
                                    return <Card key={card.index} frontImage={card.frontImage}
                                                 titleCard={card.titleCard} shortcut={card.shortcut}
                                                 onSelect={(e) => {
                                                     this.selectCard(e.currentTarget.id);
                                                 }}/>;
                                })
                            }
                        </div>);
                    })
                }
            </div>
        );
    }
}