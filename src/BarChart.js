import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';


function BarChart({ data }){
  
    const ref = useRef();
    console.log(ref);
    const width = '30vw';
    const height = '90vh';

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
    }, [Object.values(data)]);

    const draw = () => {
        
        const svg = d3.select(ref.current);
        let selection = svg.selectAll("rect").data(Object.values(data));
        let yScale = d3.scaleLinear()
                            .domain([0, d3.max(Object.values(data))])
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
            .attr("fill", "orange")
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