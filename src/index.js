import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
/// app.js

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibmFoZWxvdSIsImEiOiJjamVvZHc5N24zazU2MzNwa2N4cWppa2lsIn0.5_rLbZlODCllJudZrubOcA';

const initialViewState = {
  longitude: -1.549780,
  latitude: 47.216241,
  zoom: 13,
  pitch: 0,
  bearing: 0
};


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

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
