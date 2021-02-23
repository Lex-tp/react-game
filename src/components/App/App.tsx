import React, {Component} from 'react';
import Cardfield from "../Cardfield/Cardfield";

import 'normalize.css'
import './App.scss'

import processor from '../../images/level_1/processor.png'
import audioCable from '../../images/level_1/audio-cable.png'

export default class App extends Component<{}, {}> {

    cards = [
        {
            line: [
                {frontImage: processor, titleCard: 'Processor', index: 0},
                {},
                {frontImage: audioCable, titleCard: 'Audio Cable', index: 1}
            ]
        },
        {
            line: [
                {},
                {},
                {}
            ]
        },
        {
            line: [
                {},
                {},
                {}
            ]
        },
    ];

    render() {
        return (
            <div className='app'>
                <Cardfield cards={this.cards}/>
            </div>
        );
    }
}