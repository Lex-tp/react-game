import React, {Component} from 'react';

import './ControlPanel.scss'
import ControlPanelItem from "./ControlPanelItem/ControlPanelItem";

import loud from './images/loud.png';
import menu from './images/menu.png';
import mute from './images/mute.png';
import restart from './images/restart.png'

interface ControlPanelProps {
    buttonClick(e: React.MouseEvent): void
}

export default class ControlPanel extends Component<ControlPanelProps, { sound: boolean }> {

    constructor(props: ControlPanelProps) {
        super(props);

        this.state = {
            sound: true
        }
    }

    render() {
        return (
            <div className='panel'>
                <ControlPanelItem id='restart' icon={restart} toolTip='Restart game' buttonClick={()=>{
                    localStorage.removeItem('cards');
                    localStorage.removeItem('score');
                    localStorage.removeItem('success');
                    localStorage.removeItem('count');
                }} link='/game'/>
                <ControlPanelItem id='menu' icon={menu} toolTip='Go to Menu' buttonClick={this.props.buttonClick} link='/'/>
                <ControlPanelItem id='sound' icon={this.state.sound ? loud : mute} toolTip='Sound' buttonClick={(e) => {
                    this.props.buttonClick(e);
                    this.setState((prev)=>{
                        return{
                            sound:!prev.sound
                        }
                    })
                }}/>
            </div>
        );
    }
}

