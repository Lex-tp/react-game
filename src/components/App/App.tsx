import React, {Component} from 'react';
import CardField from "../CardField/CardField";

import 'normalize.css'
import './App.scss'
import Counter from "../Counter/Counter";
import ControlPanel from "../ControlPanel/ControlPanel";

export default class App extends Component<{}, {}> {


    render() {
        return (
            <div className='app'>
                <Counter count={10} />
                <CardField />
                <ControlPanel />
            </div>
        );
    }
}