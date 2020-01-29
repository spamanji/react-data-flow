import React from 'react';
import '../App.css';

// Even though I used context, this solution still looks like prop drilling
// Instead of providing props per child component, context provided them as bulk

export const AppContext = React.createContext({});

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

class SiblingsCommsApp extends React.Component {

    state = {
        user: {
            name: 'Sab',
            loggedIn: false
        },
        siblingMessage: 'hello',
        updateSiblingMessage: (msg) => {
            this.setState({
                siblingMessage: msg
            })
        }
    }

    render() {
        return (
            <div>
                <AppContextProvider value={this.state}>
                    <h1>I am parent</h1>
                    <ClassChild1 />
                </AppContextProvider>
                <ClassChild2 {...this.state} />
            </div>

        )
    }
}

// Listening class
class ClassChild1 extends React.Component {
    child1Style = {
        color: 'blue',
        border: 'solid 1px',
        margin: '3px'
    };
    render() {
        return (
            <AppContextConsumer>
                {props => {
                    return (
                        <div style={this.child1Style}>
                            <h3>I am Child 1 using context consumer</h3>
                            <h3>{props.user.name} is {props.user.loggedIn ? 'Authenticated' : 'Unauthenticated'}</h3>
                            <h3>Message from sibling: {props.siblingMessage}</h3>
                        </div>
                    )
                }}
            </AppContextConsumer>
        )
    }
}

class ClassChild2 extends React.Component {
    child2Style = {
        color: 'green',
        border: 'solid 1px',
        margin: '3px'
    };
    render() {
        return <>
            {/* <AppContextConsumer>
                {props => {
                    return ( */}
            <div style={this.child2Style}>
                <h3>I am Child 2 using context consumer</h3>
                <button onClick={(event) => {
                    this.props.updateSiblingMessage(event.target.value);
                    this.props.user.loggedIn = true;
                }}
                    value={"Bro says " + Math.floor(Math.random() * 100)}>Ping Sibling</button>
            </div>
            {/* )
                }}
            </AppContextConsumer> */}
        </>

    }
}

export default SiblingsCommsApp;