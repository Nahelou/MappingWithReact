import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Test from './test';


// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
/// app.js

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('Loading'));

serviceWorker.unregister();