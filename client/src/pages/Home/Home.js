import React, { Component } from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import Page from "../../components/MaterializePage";
//import MyChart from "../../components/MyChart/myChart";
import TickerList from "../../components/TickerList";
import Notes from "../../components/Notes";
import { Line } from "react-chartjs-2"

//===============================================================================================================================================
//===============================================================================================================================================
const data = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    datasets: [
        {
            data: [86, 114, -1060, 1060, 1070, 1101, 133, -1203, 4959, 400, -2000, 2303, 4600, -1000, 5600, 3000, -204, 3456, 1234, 500],
            label: "Amazon",
            borderColor: "blue",
            backgroundColor: "blue",
            fill: false,
            lineTension: 0
        },
        {
            data: [282, 350, 411, 5002, 635, -3000, 947, 2345, 5996, -1234, 4532, 5632, -1111, -2315, 3424, -400, 700, 1344, 4353, -600],
            label: "Google",
            borderColor: "red",
            backgroundColor: "red",
            fill: false,
            lineTension: 0
        }
    ],
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
        showLines: true,
        scales: {
            // y-axis info
            yAxes: [{
                display: true,
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
                //     unit: 'minute'
                // }
            }]
        }
    }
};

// CALL THIS BEFORE SETTING STATE
function changeData(arr) {
    data.datasets[0].data = arr;
}

var zero = 20;
function adddata() {
	const newData = data.datasets.map(e => {
  	return Math.floor((Math.random() * 9000) - 3000);
  })
  
  data.datasets.map(e => e.data.splice(0, 1));
  
  data.datasets.map((e, i) => {
  	e.data.push(newData[i]);
  })
  
  data.labels.push(zero);
  data.labels.splice(0, 1);

  zero++;
  //data.update();
}

setInterval(function() {
  adddata();
}, 1000);

//===============================================================================================================================================
//===============================================================================================================================================  

class Home extends Component {

    selectTicker = (tickerObj) => {
        console.log(tickerObj);
    };

    render() {
        return (
            <Page
                style={
                    {
                        "backgroundColor": "#9b179b",//<------ THEME COLOR
                    }
                }
                text="P3"//<---- LOGO TEXT
                promptLogin={true}
                username={this.props.username}
            >
                <Helmet>
                    <title>Home</title>
                </Helmet>

                <div className="Home row">
                    <div className="col s3 mycol1">
                        <TickerList
                            selectHandler={this.selectTicker}
                        /></div>
                    <div className="col s9 mycol2">
                        {/* <div className="row ChartDiv">ChartComponent</div> */}
                        <div className="wrapper">
                            {/* <canvas className="row ChartDiv" id="myChart" width="1600" height="900"></canvas> */}
                            <Line data={data} />
                        </div>
                        <button className="chartBtn" id="empty">
                            Remove Dataset
                        </button>
                        <button className="chartBtn" id="apple">
                            Apple
                        </button>
                        {/* <div className="row NotesDiv">NotesComponent</div>
                        <div className="row ChartDiv">ChartComponent</div> */}
                        <div className="row NotesDiv"><Notes /></div>
                    </div>
                </div>
            </Page>
        );
    }
};

export default Home;