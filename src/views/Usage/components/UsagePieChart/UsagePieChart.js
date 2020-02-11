import React from "react";
import CanvasJSReact from "../../../../assets/canvajs/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UsagePieChart = () => {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Service Usage"
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: 18, label: "Timeseries" },
          { y: 49, label: "Assets" },
          { y: 9, label: "Files" },
          { y: 5, label: "Events" },
          { y: 19, label: "3D" }
        ]
      }
    ]
  };
  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default UsagePieChart;
