import React, {Component} from 'react';

import './ControlPanelItem.scss'

interface ControlPanelItemProps {
    id: string;
    icon?: string,
    toolTip?: string,
    buttonClick(e:React.MouseEvent): void,
    link?: string
}

export default class ControlPanelItem extends Component<ControlPanelItemProps,{}> {

    render() {
        return (
            <a href={this.props.link} id={this.props.id} className='button' onClick={(e)=>{
                this.props.buttonClick(e);
            }}>
                <img className='button__icon' src={this.props.icon} alt='icon' title={this.props.toolTip} />
            </a>
        );
    }
}
