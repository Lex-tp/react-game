import React, {Component} from 'react';
import Cardfield from "../Cardfield/Cardfield";

import 'normalize.css'
import './App.scss'

export default class App extends Component<{}, {}> {


    render() {
        return (
            <div className='app'>
                <Cardfield/>
            </div>
        );
    }
}