import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {

    const arr = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...arr);


  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          id={datapoint.label}
          value={datapoint.value}
          max={maxValue}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
