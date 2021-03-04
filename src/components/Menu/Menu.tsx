import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Menu.scss';

import logo from './images/logo.png'

export default class Menu extends Component<{onClickButton(): void},{}> {


    render() {
        return (
            <div className='menu'>
                <img src={logo} alt='logo'/>
                <span className='menu__label'>Memory game</span>
                <Link to='/game/' className='menu__new' onClick={()=>{
                    this.props.onClickButton();
                }}>New game</Link>
                <Link to='/game/' className='menu__continue'>Continue</Link>
            </div>
        );
    }
}
