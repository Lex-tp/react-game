import React, {Component} from 'react';

import './ControlPanel.scss'
import ControlPanelItem from "./ControlPanelItem/ControlPanelItem";

import records from './images/records.png';
import loud from './images/loud.png';
import menu from './images/menu.png';

export default class ControlPanel extends Component<{},{}> {

    render() {
        return (
            <div className='panel'>
                <ControlPanelItem icon={records} toolTip='Таблица рекордов'/>
                <ControlPanelItem icon={menu} toolTip='Меню'/>
                <ControlPanelItem icon={loud} toolTip='Звук'/>
            </div>
        );
    }
}

