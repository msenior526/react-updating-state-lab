// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {
    state = {timesClicked: 0}

    handleClick = () => {
        this.setState(prev => {
            return {timesClicked: prev.timesClicked + 1}
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}
            >{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;