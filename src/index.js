import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';


// ReactDOM.render(<App />, document.getElementById('root'));
/// app.js

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibmFoZWxvdSIsImEiOiJjamVvZHc5N24zazU2MzNwa2N4cWppa2lsIn0.5_rLbZlODCllJudZrubOcA';

// Initial viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}];

class App extends React.Component {
  render() {
    const layers = [
      new LineLayer({id: 'line-layer', data})
    ];

    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    );
  }
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
