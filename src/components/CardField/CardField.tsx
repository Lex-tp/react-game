import React, {Component} from "react";

import './CardField.scss'
import Card, {CardProps} from "../Card/Card";


export default class CardField extends Component<{}, { cards: Array<any> }> {

    constructor(props: any) {
        super(props);
        this.state = {
            cards: []
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
                                                 onSelect={(e) => console.log(e.currentTarget)}/>;
                                })
                            }
                        </div>);
                    })
                }
            </div>
        );
    }
}