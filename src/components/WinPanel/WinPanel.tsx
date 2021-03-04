import React, {Component} from 'react';

import './WinPanel.scss'
import move from '../Counter/images/steps.png'

interface WinPanelProps {
    show: boolean,
    moves: number
}

class WinPanel extends Component<WinPanelProps, {}> {

    clearSaves() {
        localStorage.removeItem('cards');
        localStorage.removeItem('score');
        localStorage.removeItem('success');
        localStorage.removeItem('count');
    }

    render() {
        return (
            <div className={`winBox ${this.props.show ? 'winBox__show' : ''}`}>
                <span className={`winBox__text ${this.props.show ? 'winBox__text__show' : ''}`}>Great job</span>
                <div className='winBox__score'>
                    <img className='winBox__score__img' src={move} alt='moves'/>
                    <span
                        className={`winBox__score__number ${this.props.show ? 'winBox__score__number__show' : ''}`}>{this.props.moves}</span>
                </div>
                <a href='/game' className='winBox__button' onClick={() => { this.clearSaves()}}>Restart</a>
                <a href='/' className='winBox__button' onClick={() => { this.clearSaves()}}>Main Menu</a>
            </div>
        );
    }
}

export default WinPanel;
