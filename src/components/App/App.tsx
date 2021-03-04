import React, {Component} from 'react';
import CardField from "../CardField/CardField";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'normalize.css'
import './App.scss'
import Menu from "../Menu/Menu";

import github from './images/github.png';
import rs from './images/rs_school.svg'

export default class App extends Component<{}, {}> {

    constructor(props: {}) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
        localStorage.removeItem('cards');
        localStorage.removeItem('score');
        localStorage.removeItem('success');
        localStorage.removeItem('count');
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app'>
                    <Switch>
                        <Route path='/game' component={() => <CardField/>}/>
                        <Route path='/' render={() => <Menu onClickButton={()=>{this.onClickButton()}}/>}/>
                    </Switch>
                    <div className='footer'>
                        <div className='footer__item'>
                            <img className='footer__item__img' src={github} alt='github'/>
                            <a href='https://github.com/Lex-tp'>Lex-tp</a>
                        </div>
                        <div className='footer__item'>
                            <span className='footer__year'>2021</span>
                        </div>
                        <div className='footer__item'>
                            <a href='https://rs.school/react/'><img className='footer__rs' src={rs} alt='rsSchool'/></a>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
