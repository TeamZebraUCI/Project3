// import React from "react";
// import Chart from "chart.js";

// // x-axis ticks
// // data points
// const amazon = [86, 114, -1060, 1060, 1070, 1101, 133, -1203, 4959, 400, -2000, 2303, 4600, -1000, 5600, 3000, -204, 3456, 1234, 500];
// const google = [282, 350, 411, 5002, 635, -3000, 947, 2345, 5996, -1234, 4532, 5632, -1111, -2315, 3424, -400, 700, 1344, 4353, -600];

// // link the graph to our html
// const ctx = document.getElementById("myChart");
// let myChart = new Chart(ctx, {
//     // specify what type of grpah we are using
//     type: 'line',
//     data: {
//         // labels: time,
//         labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
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

// let count = 20;
// function updateChart() {
//     // selecting random dataset prices
//     let value0 = Math.floor((Math.random() * 9000) + -3000);
//     let value1 = Math.floor((Math.random() * 9000) + -3000);
//     // let value2 = Math.floor((Math.random() * 9000) + -3000);

//     // updating the x-axis ticks with every count
//     myChart.data.labels.push(count);
//     myChart.data.labels.splice(0, 1);
//     // update dataset 1
//     myChart.data.datasets[0].data.splice(0, 1);
//     myChart.data.datasets[0].data.push(value0);
//     // update dataset 2
//     myChart.data.datasets[1].data.splice(0, 1);
//     myChart.data.datasets[1].data.push(value1);
//     // update dataset 3
//     // myChart.data.datasets[2].data.splice(0, 1);
//     // myChart.data.datasets[2].data.push(value2);

//     // updates the chart by adding new time
//     myChart.update();
//     count++;
// }
// // time between updates
// setInterval(function () {
//     updateChart();
// }, 1000);

// // add apple dataset
// $('#apple').click(function () {
//     // $(newDataset).toggle('#apple');
//     const apple = [3500, -432, -777, 5200, -1234, 5400, 4321, 1234, -1234, 1234, 3300, 4400, -2500, 5700, 2000, -100, 432, 1800, -3000, 2424];
//     const newDataset = {
//         data: apple,
//         label: "Apple",
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

// //=====================================================================================================================================================
// //=====================================================================================================================================================

// export default class Chart extends Component {
//     addInfo = e => {
//         const apple = [3500, -432, -777, 5200, -1234, 5400, 4321, 1234, -1234, 1234, 3300, 4400, -2500, 5700, 2000, -100, 432, 1800, -3000, 2424];
//         const newDataset = {
//             data: apple,
//             label: "Apple",
//             borderColor: "orange",
//             backgroundColor: "orange",
//             fill: false,
//             lineTension: 0
//         }
//     };

//     render() {
//         return (
//             <div className="newDataInfo">
//                 const newDataset = {
//                 data: apple,
//                 label: "Apple",
//                 borderColor: "orange",
//                 backgroundColor: "orange",
//                 fill: false,
//                 lineTension: 0
//                 }
//             </div>
//         )
//     };
// }

// //=====================================================================================================================================================
// //=====================================================================================================================================================


// // clear the first dataset from the chart
// document.getElementById("empty").addEventListener("click", function () {
//     myChart.data.datasets.splice(0, 1);
//     myChart.update();
// })

// // export {myChart};
