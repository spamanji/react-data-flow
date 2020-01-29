import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
//import SiblingsCommsApp from './components/SiblingsCommsApp';
//import ChildToParentDataFlowApp from './components/ChildToParentDataFlowApp'
//import TestApp from './components/TestApp.js'
import GlobalStateFlowApp from './components/GlobalStateFlowApp'
//import ContextApiNewExampleApp from './components/ContextApiNewExampleApp'

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<SiblingsCommsApp />, document.getElementById('root'));
ReactDOM.render(<GlobalStateFlowApp />, document.getElementById('root'));
//ReactDOM.render(<ChildToParentDataFlowApp />, document.getElementById('root'))
//ReactDOM.render(<ContextApiNewExampleApp />, document.getElementById('root'))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
