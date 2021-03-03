import React, {Component} from 'react';

import './ControlPanel.scss'
import ControlPanelItem from "./ControlPanelItem/ControlPanelItem";

import records from './images/records.png';
import loud from './images/loud.png';
import menu from './images/menu.png';
import mute from './images/mute.png';

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
                <ControlPanelItem id='records' icon={records} toolTip='Таблица рекордов'
                                  buttonClick={this.props.buttonClick}/>
                <ControlPanelItem id='menu' icon={menu} toolTip='Меню' buttonClick={this.props.buttonClick}/>
                <ControlPanelItem id='sound' icon={this.state.sound ? loud : mute} toolTip='Звук' buttonClick={(e) => {
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

