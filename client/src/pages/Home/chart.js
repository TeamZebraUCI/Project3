import Chart from 'chart.js';

// x-axis ticks
const years = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
// data points
const africa = [86, 114, 1060, 1060, 1070, 1101, 133, 221, 783, 2478];
const asia = [282, 350, 411, 5002, 635, 8090, 947, 1402, 3700, 5267];
const europe = [168, 1700, 178, 190, 203, 276, 4008, 547, 6705, 734];
const latinAmerica = [400, 2000, 1000, 1600, 240, 38, 7400, 1670, 5080, 784];
const northAmerica = [60, 300, 2000, 200, 700, 2600, 820, 1720, 3120, 4330];

// link the graph to our html
const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
    // specify what type of grpah we are using
    type: 'line',
    data: {
        labels: years,
        datasets: [
            {
                data: africa,
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false,
                lineTension: 0
            },
            {
                data: asia,
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false,
                lineTension: 0
            },
            {
                data: europe,
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false,
                lineTension: 0
            },
            {
                data: latinAmerica,
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false,
                lineTension: 0
            },
            {
                data: northAmerica,
                label: "North America",
                borderColor: "#c45850",
                fill: false,
                lineTension: 0
            }
        ]
    }
});

export {myChart};


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