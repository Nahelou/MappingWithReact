// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import BarChart from './BarChart';
import dataset from './data/tweets_simplify.json'

const datas = dataset;
let dataPerCountry = [];
var i = 0;

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
        </div>
    );
}

export default Charts;