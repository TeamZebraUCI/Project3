// import React from "react";
// import Chart from "chart.js";

// export default class Chart extends Comment {}
// // x-axis ticks
// // const time = ["10:00am", "10:30am",  "11:00am",  "11:30am",  "12:00pm",  "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm"];
// // data points
// const amazon = [86, 114, 1060, 1060, 1070, 1101, 133];
// const google = [282, 350, 411, 5002, 635, 3090, 947];
// const microsoft = [168, 1700, 178, 190, 203, 276, 4008];

// // link the graph to our html
// const ctx = document.getElementById("myChart");
// let myChart = new Chart(ctx, {
//     // specify what type of grpah we are using
//     type: 'line',
//     data: {
//         // labels: time,
//         labels: [0, 1, 2, 3, 4],
//         datasets: [
//             {
//                 data: amazon,
//                 label: "Amazon",
//                 borderColor: "blue",
//                 backgroundColor: "blue",
//                 fill: false,
//                 lineTension: 0
//             },
//             {
//                 data: google,
//                 label: "Google",
//                 borderColor: "red",
//                 backgroundColor: "red",
//                 fill: false,
//                 lineTension: 0
//             },
//             {
//                 data: microsoft,
//                 label: "Microsoft",
//                 borderColor: "green",
//                 backgroundColor: "green",
//                 fill: false,
//                 lineTension: 0
//             },
//         ]
//     },
//     options: {
//         responsive: true,
//         tooltips: {
//             mode: "index",
//             intersect: false
//         },
//         hover: {
//             mode: "nearest",
//             intersect: true
//         },
//         showLines: true,
//         scales: {
//             // y-axis info
//             yAxes: [{
//                 display: true,
//                 // label name
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Price (USD)'
//                 },
//                 // line info
//                 ticks: {
//                     beginAtZero: true,
//                     // space between ticks
//                     stepSize: 1000,
//                     // the min value will display 100 
//                     // unless there is a lower number
//                     suggestedMin: 100,
//                     // the max value will display 1000 
//                     // unless there is a higher number
//                     suggestedMax: 1000
//                 }
//             }],
//             // x-axis info
//             xAxes: [{
//                 // label name
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Time (PST)'
//                 },
//                 // line info
//                 // type: 'time',
//                 // time: {
//                 //     unit: 'minute'
//                 // }
//             }]
//         }
//     }
// });

// let count = 5;
// function updateChart() {
//     // selecting random dataset prices
//     let value0 = Math.floor((Math.random() * 9000) + -3000);
//     let value1 = Math.floor((Math.random() * 9000) + -3000);
//     let value2 = Math.floor((Math.random() * 9000) + -3000);
//     // let value3 = Math.floor((Math.random() * 9000) + -3000);
//     // let value4 = Math.floor((Math.random() * 9000) + -3000);
//     // updating the x-axis ticks with every count
//     myChart.data.labels.push(count);
//     myChart.data.labels.splice(0, 1);
//     // update dataset 1
//     myChart.data.datasets[0].data.splice(0, 1);
//     myChart.data.datasets[0].data.push(value0);
//     // update dataset 2
//     myChart.data.datasets[1].data.splice(0, 1);
//     myChart.data.datasets[1].data.push(value1);
//     // // update dataset 3
//     myChart.data.datasets[2].data.splice(0, 1);
//     myChart.data.datasets[2].data.push(value2);
//     // // update dataset 4
//     // myChart.data.datasets[3].data.splice(0, 1);
//     // myChart.data.datasets[3].data.push(value3);
//     // // update dataset 5
//     // myChart.data.datasets[4].data.splice(0, 1);
//     // myChart.data.datasets[4].data.push(value4);

//     // updates the chart by adding new time
//     myChart.update();
//     count++;
// }

// setInterval(function () {
//     updateChart();
// }, 1000);

// // add adobe dataset
// $('#adobe').click(function () {
//     // $(newDataset).toggle('#adobe');
//     const adobe = [1500, 4200, 2300, 1400, 5500, 4200, 200];
//     const newDataset = {
//         data: adobe,
//         label: "Adobe",
//         borderColor: "orange",
//         backgroundColor: "orange",
//         fill: false,
//         lineTension: 0
//     }
//     // You add the newly created dataset to the list of `data`
//     myChart.data.datasets.push(newDataset);
//     // You update the chart to take into account the new dataset
//     myChart.update();
// });

// // add apple dataset
// $('#apple').click(function () {
//     // $(newDataset).toggle('#apple');
//     const apple = [3500, 5200, 3300, 4400, 2500, 5700, 2000];
//     const newDataset = {
//         data: apple,
//         label: "Apple",
//         borderColor: "purple",
//         backgroundColor: "purple",
//         fill: false,
//         lineTension: 0
//     }
//     // You add the newly created dataset to the list of `data`
//     myChart.data.datasets.push(newDataset);
//     // You update the chart to take into account the new dataset
//     myChart.update();
// });

// // clear the first dataset from the chart
// document.getElementById("empty").addEventListener("click", function () {
//     myChart.data.datasets.splice(0, 1);
//     myChart.update();
// })

// // export {myChart};


// export default MyChart;

// new dataset input button
// $('#button').click(function () {
//     const newDataset = {
//         data: [150, 1200, 1300, 1600, 2500, 3200, 2000, 3000, 3800, 5200],
//         label: "Australia",
//         borderColor: "black",
//         fill: false,
//         lineTension: 0
//     }
//     // You add the newly created dataset to the list of `data`
//     data.datasets.push(newDataset);
//     // You update the chart to take into account the new dataset
//     myChart.update();
// });