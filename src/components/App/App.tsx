import React, {Component} from 'react';
import CardField from "../CardField/CardField";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'normalize.css'
import './App.scss'
import Menu from "../Menu/Menu";

export default class App extends Component<{}, {}> {

    render() {
        return (
            <BrowserRouter>
                <div className='app'>
                    <Switch>
                    <Route path='/game' component={CardField}/>
                    <Route path='/' component={Menu}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}