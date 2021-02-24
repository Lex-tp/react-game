import React, {Component} from 'react';
import Cardfield from "../Cardfield/Cardfield";

import 'normalize.css'
import './App.scss'

import processor from '../../images/level_1/processor.png'
import audioCable from '../../images/level_1/audio-cable.png'

export default class App extends Component<{}, {cards:Array<any>}> {

    constructor(props:any) {
        super(props);
        this.state = {
            cards: [
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
                {
                    line: [
                        {},
                        {},
                        {}
                    ]
                },
            ]
        }
    }

    componentDidMount() {
        fetch('/level_1')
            .then(res => res.json())
            .then(cards => this.setState({cards: cards}));
    }

    render() {
        return (
            <div className='app'>
                <Cardfield cards={this.state.cards}/>
            </div>
        );
    }
}