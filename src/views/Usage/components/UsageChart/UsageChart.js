import React from 'react';
import CanvasJSReact from '../../../../assets/canvajs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UsageChart = () => {
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: 'Service Usage',
        },
        axisY: {
            title: 'Number of Requests',
            includeZero: false,
        },
        toolTip: {
            shared: true,
        },
        data: [
            {
                type: 'spline',
                name: 'Files',
                showInLegend: true,
                dataPoints: [
                    { y: 155, label: 'Jan' },
                    { y: 150, label: 'Feb' },
                    { y: 152, label: 'Mar' },
                    { y: 148, label: 'Apr' },
                    { y: 142, label: 'May' },
                    { y: 150, label: 'Jun' },
                    { y: 146, label: 'Jul' },
                    { y: 149, label: 'Aug' },
                    { y: 153, label: 'Sept' },
                    { y: 158, label: 'Oct' },
                    { y: 154, label: 'Nov' },
                    { y: 150, label: 'Dec' },
                ],
            },
            {
                type: 'spline',
                name: 'Assets',
                showInLegend: true,
                dataPoints: [
                    { y: 172, label: 'Jan' },
                    { y: 173, label: 'Feb' },
                    { y: 175, label: 'Mar' },
                    { y: 172, label: 'Apr' },
                    { y: 162, label: 'May' },
                    { y: 165, label: 'Jun' },
                    { y: 172, label: 'Jul' },
                    { y: 168, label: 'Aug' },
                    { y: 175, label: 'Sept' },
                    { y: 170, label: 'Oct' },
                    { y: 165, label: 'Nov' },
                    { y: 169, label: 'Dec' },
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

export default UsageChart;
