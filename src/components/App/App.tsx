import React, {Component} from 'react';
import CardField from "../CardField/CardField";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'normalize.css'
import './App.scss'
import Menu from "../Menu/Menu";

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
                </div>
            </BrowserRouter>
        );
    }
}
