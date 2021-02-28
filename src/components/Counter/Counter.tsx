import React, { Component } from 'react';

import './Counter.scss';
import Steps from './images/steps.png'

export interface CounterProps {
    count: number
}

export default class Counter extends Component<CounterProps,{count:number}> {

    constructor(props:CounterProps) {
        super(props);

        this.state = {
            count: props.count
        }
    }

    render() {
        return (
          <div className='counter-box' title='Счетчик оставшихся ходов'>
              <img className='counter-box__icon' src={Steps} alt='moves'/>
              <span className='counter-box__moves'>{this.state.count}</span>
          </div>
        );
    }
}