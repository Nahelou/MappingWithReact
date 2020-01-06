import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole-disponibilites&rows=123&facet=banking&facet=bonus&facet=status&facet=contract_name')
      .then(response => response.json())
      .then(data => this.setState({ data }),
      console.log(this.state.data)
    );

}
  render(){
    return (
    <button style={{width:20, height: 20, zIndex:9999}} title="Search" onClick={()=>{this.componentDidMount()}} ></button>)
  }
}
export default Test;
