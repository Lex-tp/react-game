import React, {Component} from "react";

import './Cardfield.scss'
import Card from "../Card/Card";

interface CardfieldProps {
    cards: Array<object>,
}

export default class Cardfield extends Component<CardfieldProps,{}> {
    private cards: JSX.Element[];

    constructor(props:CardfieldProps) {
        super(props);
        this.cards = props.cards.map((card,index)=>{
            return (
                <Card key={index} />
            );
        })
    }

    render() {
        return (
            <div className='field'>
                { this.cards }
            </div>
        );
    }

}