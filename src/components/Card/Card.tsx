import React, {Component} from "react";

import './Card.scss'
import Card_back from './images/back_card.svg'

interface CardProps {
    frontImage: String,
    altImage: String
}

export default class Card extends Component <{},{}> {

    render() {
        return (
            <div className='card'>
                <div className="card__flipper">
                <div className='card__front'><img className='card__front__img' src={Card_back} /></div>
                <div className="card__back"><img className='card__back__img' src={Card_back} /></div>
                </div>
            </div>
        );
    }

}