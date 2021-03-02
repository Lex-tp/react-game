import React, {Component} from "react";

import './Card.scss';
import Card_back from './images/back_card.svg';

const Open_sound = require('./sounds/openCard.mp3').default;

export interface CardProps {
    frontImage?: string,
    titleCard?: string,
    index?: number,
    shortcut?: string,

    onSelect(e: React.MouseEvent): void,
}

export default class Card extends Component <CardProps, { isOpen: boolean }> {
    private audio: HTMLAudioElement;

    constructor(props: CardProps) {
        super(props);
        this.audio = new Audio(Open_sound);
        this.state = {
            isOpen: false
        };
        this.activeCards = this.activeCards.bind(this);
    }

    activeCards() {
        this.setState((state) => {
            return {
                isOpen: true,
            }
        });

        if (!this.state.isOpen) {
            this.audio.play();
        }
    }

    render() {
        return (
            <div id={this.props.shortcut} className={`card ${this.state.isOpen ? 'card__active' : ''}`}
                 onClick={(e) => {
                     this.activeCards();
                     this.props.onSelect(e);
                 }}>
                <div className="card__flipper">
                    <div className='card__front'>
                        <img className='card__front__img' src={this.props.frontImage} alt={this.props.titleCard}/>
                        <span className='card__front__title'>{this.props.titleCard}</span>
                    </div>
                    <div className="card__back">
                        <img className='card__back__img' src={Card_back} alt='shirt card'/>
                    </div>
                </div>
            </div>
        );
    }
}