import React, {PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';
import DeckGL from '@deck.gl/react';
import {WebMercatorViewport} from '@deck.gl/core';
import GL from '@luma.gl/constants';
import {GeoJsonLayer} from '@deck.gl/layers';
import {HeatmapLayer} from '@deck.gl/aggregation-layers';
import {StaticMap} from 'react-map-gl';
import data from './data/tweets_simplify.json';



const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibmFoZWxvdSIsImEiOiJjazUxOG9yNDcwcDUyM3NtaTVzMnd5ejdrIn0.hFTRn-SVqOhufKAcRCnYLA';

const initialViewState = {
  longitude: -1.549780,
  latitude: 47.216241,
  zoom: 5,
  pitch: 0,
  bearing: 0
};

class App extends React.Component {

  constructor() {
    super();
    this.state = { data: data,
       token: MAPBOX_ACCESS_TOKEN,
       viewState:initialViewState,
       intensity: 5,
       threshold: 0.05,
       radiusPixels: 100,
       style: {
         height:'95vh',
         width:'67vw',
         marginTop:'5vh'
       }
      };
  }


  async componentDidMount() {
  }

  render() {
    const layers = [
      new GeoJsonLayer({
        id: 'point-layer',
        data:this.state.data,
        getRadius: 3000,
        getFillColor: [240, 60, 200],
        onViewStateChange: ({viewState}) => {
          const viewport = new WebMercatorViewport(viewState);
          const nw = viewport.unproject([0, 0]);
          const se = viewport.unproject([viewport.width, viewport.height]);
          console.log("north: ", nw[1], ", south: ", se[1]);
          console.log("east: ", se[0], "west: ", nw[0] );
        },
        parameters: {
          [GL.DEPTH_TEST]: false,
          [GL.BLEND]: true,
          [GL.BLEND_SRC_RGB]: GL.ONE,
          [GL.BLEND_DST_RGB]: GL.ONE,
          [GL.BLEND_EQUATION]: GL.FUNC_ADD,
        }
      }),
      new HeatmapLayer({
        data:this.state.data,
        id: 'heatmp-layer',
        pickable: false,
        getPosition: d => [d.geometry.coordinates[1], d.geometry.coordinates[0]],
        intensity:this.state.intensity,
        theshold:this.state.threshold,
        radiusPixels:this.state.radiusPixels
      })
    ];

    return (
      <DeckGL
        key="0"
        initialViewState={this.state.viewState}
        controller={true}
        layers={layers}
        style={this.state.style}
      >
        <StaticMap
          key="1"
          mapStyle={'mapbox://styles/mapbox/dark-v9'}
          preventStyleDiffing={true}
          mapboxApiAccessToken={this.state.token} />
      </DeckGL>
    );
  }
}


export default App;
