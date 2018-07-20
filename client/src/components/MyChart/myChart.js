import React, { Component } from 'react';
import Chart from "chart.js";

// x-axis ticks
const time = ["10:00am", "10:30am", "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm"];
// data points
const amazon = [86, 114, 1060, 1060, 1070, 1101, 133, 221, 783, 2478];
const google = [282, 350, 411, 5002, 635, 8090, 947, 1402, 3700, 5267];
const microsoft = [168, 1700, 178, 190, 203, 276, 4008, 547, 6705, 734];
const netflix = [400, 2000, 1000, 1600, 240, 38, 7400, 1670, 5080, 784];
const youtube = [60, 300, 2000, 200, 700, 2600, 820, 1720, 3120, 4330];

// link the graph to our html
const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
    // specify what type of grpah we are using
    type: 'line',
    data: {
        labels: time,
        datasets: [
            {
                data: amazon,
                label: "Amazon",
                borderColor: "blue",
                fill: false,
                lineTension: 0
            },
            {
                data: google,
                label: "Google",
                borderColor: "red",
                fill: false,
                lineTension: 0
            },
            {
                data: microsoft,
                label: "Microsoft",
                borderColor: "green",
                fill: false,
                lineTension: 0
            },
            {
                data: netflix,
                label: "NetFlix",
                borderColor: "yellow",
                fill: false,
                lineTension: 0
            },
            {
                data: youtube,
                label: "YouTube",
                borderColor: "purple",
                fill: false,
                lineTension: 0
            }
        ]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: "index",
            intersect: false
        },
        hover: {
            mode: "nearest",
            intersect: true
        },
        scales: {
            // y-axis info
            yAxes: [{
                // label name
                scaleLabel: {
                    display: true,
                    labelString: 'Price (USD)'
                },
                // line info
                ticks: {
                    beginAtZero: true,
                    // space between ticks
                    stepSize: 1000,
                    // the min value will display 100 
                    // unless there is a lower number
                    suggestedMin: 100,
                    // the max value will display 1000 
                    // unless there is a higher number
                    suggestedMax: 1000
                }
            }],
            // x-axis info
            xAxes: [{
                // label name
                scaleLabel: {
                    display: true,
                    labelString: 'Time (PST)'
                },
                // line info
                // type: 'time',
                // time: {
                //     display: currentTime,
                // }
            }]
        }
    }
});

//====================================================================================

export default class Chart extends Component {

    nikeBtn = e => {
        const nike = [150, -2200, 1300, 1600, 2500, 3200, 2000, 3000, 3800, 5200];
        const newDataset = {
            data: nike,
            label: "Nike",
            borderColor: "black",
            fill: false,
            lineTension: 0
        }
        // You add the newly created dataset to the list of `data`
        myChart.data.datasets.push(newDataset);
        // You update the chart to take into account the new dataset
        myChart.update();
    }

    // add lexus dataset
    lexusBtn = e => {
        const lexus = [1500, 4200, 2300, 1400, 5500, 6200, 200, 6000, 4800, 5800];
        const newDataset = {
            data: lexus,
            label: "Lexus",
            borderColor: "orange",
            fill: false,
            lineTension: 0
        }
        // You add the newly created dataset to the list of `data`
        myChart.data.datasets.push(newDataset);
        // You update the chart to take into account the new dataset
        myChart.update();
    };

    // add apple dataset
    appleBtn = e => {
        const apple = [3500, 5200, 3300, 6400, 2500, 6700, 2000, 8000, 5200, 9001];
        const newDataset = {
            data: apple,
            label: "Apple",
            borderColor: "gray",
            fill: false,
            lineTension: 0
        }
        // add the newly created dataset to the list of `data`
        myChart.data.datasets.push(newDataset);
        // update to show new changes
        myChart.update();
    };

    // clear a dataset from the chart
    remove = e => {
        // remove the first dataset from the chart
        myChart.data.datasets.splice(0, 1);
        // update to show new changes
        myChart.update();
    };

    render() {
        return (
            <div>
                <button onClick={this.nikeBtn}>Nike</button>
                <button onClick={this.lexusBtn}>Lexus</button>
                <button onClick={this.appleBtn}>Apple</button>
                <button onClick={this.remove}>Remove Dataset</button>
            </div>
        )
    }
}


// export default myChart;
