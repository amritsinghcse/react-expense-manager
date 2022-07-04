import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          id={datapoint.label}
          value={datapoint.value}
          max={null}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
