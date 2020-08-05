import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppBis from './Charts';
import App from './App';
import BubbleChart from './BubbleChart';


ReactDOM.render(<App />, document.getElementById('map'));
ReactDOM.render(<AppBis />, document.getElementById('charts'));

// ReactDOM.render(<BarChart />, document.getElementById('charts'));
// serviceWorker.unregister();