import React, {Component} from "react";

import './Cardfield.scss'
import Card, {CardProps} from "../Card/Card";

interface CardfieldProps {
    cards: Array<object>,
}

export default class Cardfield extends Component<CardfieldProps,{}> {
    private readonly cards: JSX.Element[];

    constructor(props:CardfieldProps) {
        super(props);
        this.cards = props.cards.map((cardLine:any,indexLine:number)=>{
            return (<div className='field-line' key={indexLine}>
                {
                    cardLine.line.map((card:CardProps)=>{
                        return <Card key={card.index} frontImage={card.frontImage}  titleCard={card.titleCard} />;
                    })
                }
            </div>);
        });
    }

    render() {
        return (
            <div className='field'>
                { this.cards }
            </div>
        );
    }
}