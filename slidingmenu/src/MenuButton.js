import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {
    render() {
        console.log('MenuButton rendered');
        return (
            <button id="roundButton"
                    onMouseDown={this.props.handleMouseDown}>
            </button>
        )
    }
}

export default MenuButton;