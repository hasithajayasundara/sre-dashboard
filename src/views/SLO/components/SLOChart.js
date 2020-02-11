import React from 'react';
import CanvasJSReact from '../../../assets/canvajs/canvasjs.react';

import { connect } from 'react-redux';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

const SLOChart = ({ fetching, error }) => {
    const addSymbols = e => {
        var suffixes = ['', 'K', 'M', 'B'];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1) order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    };

    const options = {
        animationEnabled: true,
        colorSet: 'colorSet2',
        title: {
            text: 'Service Level Objectives',
        },
        axisX: {
            valueFormatString: 'MMMM',
        },
        axisY: {
            prefix: '',
            labelFormatter: addSymbols,
            minimum: 80,
        },
        toolTip: {
            shared: true,
        },
        legend: {
            cursor: 'pointer',
            // itemclick: toggleDataSeries,
            verticalAlign: 'bottom',
        },
        data: [
            {
                type: 'column',
                name: 'Throughput Uptime',
                showInLegend: true,
                xValueFormatString: 'MMMM YYYY',
                yValueFormatString: '#0.00‰',
                dataPoints: [
                    // { x: new Date(2017, 0), y: 99 },
                    // { x: new Date(2017, 1), y: 98 },
                    // { x: new Date(2017, 2), y: 96.7 },
                    // { x: new Date(2017, 3), y: 95 },
                    // { x: new Date(2017, 4), y: 97.9 },
                    // { x: new Date(2017, 5), y: 98.7 },
                    // { x: new Date(2017, 6), y: 99 },
                    // { x: new Date(2017, 7), y: 94.9 },
                    // { x: new Date(2017, 8), y: 97.0 },
                    // { x: new Date(2017, 9), y: 98.9 },
                    // { x: new Date(2017, 10), y: 99.8, indexLabel: "High Uptime" },
                    // { x: new Date(2017, 11), y: 95.9 }
                ],
            },
            {
                type: 'line',
                name: 'Latency Uptime',
                showInLegend: true,
                yValueFormatString: '#0.00‰',
                dataPoints: [
                    // { x: new Date(2017, 0), y: 90.2 },
                    // { x: new Date(2017, 1), y: 91 },
                    // { x: new Date(2017, 2), y: 94 },
                    // { x: new Date(2017, 3), y: 93 },
                    // { x: new Date(2017, 4), y: 92.6 },
                    // { x: new Date(2017, 5), y: 95 },
                    // { x: new Date(2017, 6), y: 93.9 },
                    // { x: new Date(2017, 7), y: 90 },
                    // { x: new Date(2017, 8), y: 93 },
                    // { x: new Date(2017, 9), y: 91.2 },
                    // { x: new Date(2017, 10), y: 90 },
                    // { x: new Date(2017, 11), y: 95 }
                ],
            },
            {
                type: 'area',
                name: 'Error Rate Uptime',
                markerBorderColor: 'white',
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: '#0.00‰',
                dataPoints: [
                    // { x: new Date(2017, 0), y: 85 },
                    // { x: new Date(2017, 1), y: 88 },
                    // { x: new Date(2017, 2), y: 89 },
                    // { x: new Date(2017, 3), y: 82 },
                    // { x: new Date(2017, 4), y: 90 },
                    // { x: new Date(2017, 5), y: 89 },
                    // { x: new Date(2017, 6), y: 85 },
                    // { x: new Date(2017, 7), y: 86 },
                    // { x: new Date(2017, 8), y: 89.9 },
                    // { x: new Date(2017, 9), y: 91 },
                    // { x: new Date(2017, 10), y: 85 },
                    // { x: new Date(2017, 11), y: 88 }
                ],
            },
        ],
    };
    return (
        <div>
            <CanvasJSChart options={options} />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
};

function mapsStateToProps({ slo }) {
    let { fetching, error } = slo.sloGraph;
    return { fetching, error };
}

export default connect(mapsStateToProps)(SLOChart);
