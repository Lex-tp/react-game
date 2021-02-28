import React, {Component} from 'react';

import './ControlPanelItem.scss'

interface ControlPanelItemProps {
    icon?: string,
    toolTip?: string,
}

export default class ControlPanelItem extends Component<ControlPanelItemProps,{}> {

    render() {
        return (
            <div className='button'>
                <img className='button__icon' src={this.props.icon} alt='icon' title={this.props.toolTip} />
            </div>
        );
    }
}