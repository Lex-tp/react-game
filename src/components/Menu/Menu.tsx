import React, {Component} from 'react';

import './Menu.scss';

import logo from './images/logo.png'

export default class Menu extends Component<{onClickButton(): void},{}> {


    render() {
        return (
            <div className='menu'>
                <img src={logo} alt='logo'/>
                <span className='menu__label'>Memory game</span>
                <a href='/game' className='menu__new' onClick={()=>{
                    this.props.onClickButton();
                }}>New game</a>
                <a href='/game' className='menu__continue'>Continue</a>
                <a href='/' className='menu__records'>High score</a>
            </div>
        );
    }
}
