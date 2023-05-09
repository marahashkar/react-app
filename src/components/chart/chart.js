import React from "react";
import './chart.css'
import ChartBar from "./chartBar";
const Chart =(props)=>{
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint,index )=> (<ChartBar 
            key={index} 
            value={dataPoint.value} 
           maxValue={totalMaximum}
            label={dataPoint.label}
            />
            ))}

        </div>
    )
}
export default Chart;