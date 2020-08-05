// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import BarChart from './BarChart';
import BubbleChart from './BubbleChart';
import dataset from './data/tweets_simplify.json';
import * as _ from 'lodash';

const datas = dataset;
let dataPerCountry = [];
var i = 0;

const rawdata = _.map(_.range(24), () => {
  return {
      v: _.random(10, 100)
  };
});

function cleanData(data){
    data.features.forEach((f)=>{
      let country = f.properties.COUNTRY;
      if(!dataPerCountry[country] && country !== 'France'){
        dataPerCountry[country] = 1;
      }
      else if(country !== 'France'){
        dataPerCountry[country] = dataPerCountry[country] + 1
      }
    })

}
function Charts() {
    cleanData(datas);
    return (
        <div className="Charts">
            <BarChart data={dataPerCountry} />
            <BubbleChart useLabels data={rawdata} />
        </div>
        
    );
}

export default Charts;