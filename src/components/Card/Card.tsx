import React, {Component} from "react";

import './Card.scss'
import Card_back from './images/back_card.svg'

export interface CardProps {
    frontImage?: string,
    titleCard?: string,
    index?: number
}

export default class Card extends Component <CardProps,{}> {

    render() {
        return (
            <div className='card'>
                <div className="card__flipper">
                <div className='card__front'>
                    <img className='card__front__img' src={this.props.frontImage} alt={this.props.titleCard}/>
                    <span className='card__front__title'>{this.props.titleCard}</span>
                </div>
                <div className="card__back">
                    <img className='card__back__img' src={Card_back} alt='Shirt card'/>
                </div>
                </div>
            </div>
        );
    }

}