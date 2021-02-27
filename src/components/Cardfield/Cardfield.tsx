import React, {Component} from "react";

import './Cardfield.scss'
import Card, {CardProps} from "../Card/Card";


export default class Cardfield extends Component<{}, { cards: Array<any> }> {

    constructor(props:any) {
        super(props);
        this.state = {
            cards:[]
        }
    }

    fetchData = () => {
        fetch('/level-1')
            .then(res => res.json())
            .then(cards => this.setState({cards}));
    }

    componentDidMount() {
        this.fetchData();
    }



    render() {
        return (
            <div className='field'>
                {
                    this.state.cards.map((cardLine: any, indexLine: number) => {
                        return (<div className='field-line' key={indexLine}>
                            {
                                cardLine.line.map((card: CardProps) => {
                                    return <Card key={card.index} frontImage={card.frontImage}
                                                 titleCard={card.titleCard}/>;
                                })
                            }
                        </div>);
                    })
                }
            </div>
        );
    }
}