import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';


function BarChart({ data }){
  
    const ref = useRef();
    const width = '30vw';
    const height = '90vh';
    let dataset = [];

    function findLargest9(data){
      let i=0;
      let dataToSort = Object.values(data);
      dataToSort.sort(function(a,b) {
          if (a < b) { return 1; }
          else if (a == b) { return 0; }
          else { return -1; }
      });
      while(i<10){
        dataset.push(dataToSort[i])
        i++
      }
  }
  

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("position", 'absolute')
            .style("margin-top", '5vh')
            .style("right", '0.5vw')
    }, []);

    useEffect(() => {
        draw();
    }, [Object.values(dataset)]);

    const draw = () => {

      findLargest9(data)

      const minValue = d3.min(Object.values(dataset));

      const maxValue = d3.max(Object.values(dataset));
        
      const color = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .interpolate(d3.interpolateHcl)
      .range(["#fcc5c0", "#7a0177"]);

        const svg = d3.select(ref.current);
        let selection = svg.selectAll("rect").data(Object.values(dataset));
        let yScale = d3.scaleLinear()
                            .domain([0, d3.max(Object.values(dataset))])
                            .range([0, window.innerHeight * 0.9 -100]);
        
        selection
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => window.innerHeight * 0.9 - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => window.innerHeight * 0.9)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", (d) => color(d))
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => window.innerHeight * 0.9 - yScale(d))
        
        selection
            .exit()
            .transition().duration(300)
                .attr("y", (d) => window.innerHeight * 0.9)
                .attr("height", 0)
            .remove()
    }


    return (
        <div className="chart">
            <svg ref={ref}>
            </svg>
        </div>
        
    )

}

export default BarChart;