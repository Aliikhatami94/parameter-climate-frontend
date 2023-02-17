import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const BarChart = (props) => {
    const options = {
        chart: {
            type: 'column',
            width: 500,
            borderWidth: 1,
            borderRadius: 10,
            plotBackgroundColor: 'rgba(255,255,255,0.9)',
            borderColor: 'rgba(0,0,0,0.2)'
        },
        title: {
            text: 'Payout Chart',
        },
        xAxis: {
            categories: props.xAxis,
        },
        yAxis: {
            title: {
                text: 'Year',
            },
        },
        series: [
            {
                name: 'Total Payout',
                data: props.yAxis,

            },
        ],
    };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
}

export default BarChart;
