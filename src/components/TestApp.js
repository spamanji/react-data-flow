import React from 'react';
import '../App.css';

class TestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        // this.setState(state => ({
        //     isToggleOn: !state.isToggleOn 
        // }))
        this.setState({ isToggleOn: !this.state.isToggleOn });
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default TestApp;