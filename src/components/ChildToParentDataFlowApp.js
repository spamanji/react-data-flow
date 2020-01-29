import React, { useState } from 'react';
import '../App.css';

// Data flow from Children to parent - One way!

function ChildToParentDataFlowApp() {
    const [message, setMessage] = useState('');

    const getMessageFromChild = (msg) => {
        setMessage(msg);
    }

    return (
        <div>
            <h2>I am Parent</h2>
            <h3>Message from: {message}</h3>
            <FunctionalChild name='Child 1' msgFromParent="Hello Child 1" sendToParent={getMessageFromChild} />
            <FunctionalChild name='Child 2' msgFromParent="Hello Child 2" sendToParent={getMessageFromChild} />
        </div>
    )
}

function FunctionalChild(props) {

    const handleClick = (event) => {
        event.preventDefault();
        props.sendToParent(event.target.value);
    }

    return (
        <>
            <h3>Message from parent: {props.msgFromParent}</h3>
            <button onClick={(event) => handleClick(event)}
                value={props.name + " says " + Math.floor(Math.random() * 100)}>Call Parent!</button>
        </>
    )
}

export default ChildToParentDataFlowApp;