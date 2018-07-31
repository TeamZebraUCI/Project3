import React, { Component } from "react";
import "./Home.css";
import TickerList from "../../components/TickerList";
import Notes from "../../components/Notes";
import SaveButton from "../../components/SaveButton";
import TickeChips from "../../components/TickerChips";

import { Line } from "react-chartjs-2"
import TickerChips from "../../components/TickerChips";

// new datajs plug in dummy data, then make a function that whenever teh tickers are clicked they are 
// added to the bottom of the cart, then THOSE buttons active the chart info
// when you make the API call you want to keep the interval going
// xaxis y axis dynamic, dont store it
// one function that gets the api, creates the lines, setTimeOut

//===============================================================================================================================================
//===============================================================================================================================================
// CHART DATA

const canvas = document.getElementById('chartWrapper');
const data = {
    // beginning x-axis ticks
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    // lines and points on the chart
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
    ]
};

// CALL THIS BEFORE SETTING STATE
function changeData(arr) {
    data.datasets[0].data = arr;
}

// start counting at 20
// let count = 20;
// update all active datasets
// function addData() {
//     const newData = myLineChart.data.datasets.map(e => {
//         return Math.floor((Math.random() * 9000) - 3000);
//     })

//     myLineChart.data.datasets.map(e => e.data.splice(0, 1));

//     myLineChart.data.datasets.map((e, i) => {
//         e.data.push(newData[i]);
//     })

//     myLineChart.data.labels.push(count);
//     myLineChart.data.labels.splice(0, 1);

//     // add 1 to each new count after 20
//     count++;
//     // display new changes to the chart
//     // myLineChart.data.update();
//     return addData;
// }

// time between updates
// setInterval(function () {
//     addData();
//     console.log("in the loop");
// }, 1000);


var option = {
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
}

let myLineChart = {
    data: data,
    options: option
  };

//===============================================================================================================================================
//===============================================================================================================================================  

class Home extends Component {
    // empty array of companies
    // whenever the ticker is clicked set state and push the speicific company clicked
    // push ticker to state then the button resfreshes state
    state = {
        data: data,
        options: option
    }

    // timeout?
    // constructor(props) {
    //     super(props);
    //     this.state = {};

    //     setInterval(() => {
    //         this.setState(1000)
    //     })
    // }

    // functionName = () => {
    //     someOtherName = {
    //         // prepare info
    //         // add data
    //         // changes state
    //         // set state
    //     }
    // }


    // create a function with a setInterval to call the API every ___ seconds
    // timer function, every active stock runs the timer every second
    addData = () => {
        let count = 20;
        const newData = myLineChart.data.datasets.map(e => {
            return Math.floor((Math.random() * 9000) - 3000);
        })
    
        myLineChart.data.datasets.map(e => e.data.splice(0, 1));
    
        myLineChart.data.datasets.map((e, i) => {
            e.data.push(newData[i]);
        })
    
        myLineChart.data.labels.push(count);
        myLineChart.data.labels.splice(0, 1);
    
        // add 1 to each new count after 20
        count++;
        // display new changes to the chart
        myLineChart.data.update();
    }
    
    // setInterval = () => {
    //     addData();
    //     console.log("in the loop");
    //     1000;
    // }



    selectTicker = (tickerObj) => {
        console.log(tickerObj);
    };

    showSaveButton = ()=>{
        if(this.props.username){
            return <SaveButton/>;
        }
        return;
    };

    // remove dataset button
    removeBtn = e => {
        data.datasets.splice(0, 1);
        // bdata.datasets.update();
    };

    // make a state that has a property of companies in an array
    // minimize all functions to be plugged in dynamically, use appleBtn model
    // add apple dataset
    appleBtn = e => {
        // setState will take advantage of previous state (prevState) to make a new one
        this.setState((prevState) => {
            // we had a new set of data to "datasets" found in "prevState" because we cannot modify state directly (this.state)
            prevState.data.datasets.push(
                {
                    // plugin API data here dynamically, all new data passes through this button to be added to the chart
                    data: [3500, -432, -777, 5200, -1234, 5400, 4321, 1234, 4322, -2000, -200, 5321, 2134, 100, 45, -54, -700, 500, 1456, -2900],
                    label: "Apple",
                    borderColor: "green",
                    backgroundColor: "green",
                    fill: false,
                    lineTension: 0
                }
            );
            // this prepares a new object to set as state named "newState"
            // we have to keep the original keys of the previous state so we don't lose them
            // in this case, they are "data" and "options"
            let newState = {
                // Object.assign creates a new object based off a target and another object with data
                // new keys can either replace or add to the target
                // here we are replacing "datasets"
                data: Object.assign({
                    datasets: prevState.data.datasets
                    // the target object is prevState
                }, prevState.data),
                // here we keep options set to prevState.option because we wanna use them gain
                options: prevState.option
            };
            // finally here we have to return newState (which is an object)
            // returning this object works to specifically set a new state
            // for the React component
            return newState;
        });
        // this.setState((prevState) => {
        //     prevState.data.datasets.push(
        //         {
        //             data: [3500, -432, -777, 5200, -1234, 5400, 4321, 1234, 4322, -2000, -200, 5321, 2134, 100, 45, -54, -700, 500, 1456, -2900],
        //             label: "Apple",
        //             borderColor: "green",
        //             backgroundColor: "green",
        //             fill: false,
        //             lineTension: 0
        //         }
        //     );
        //     return {
        //         data: Object.assign({
        //             datasets: prevState.data.datasets
        //         }, prevState.data),
        //         options: prevState.option
        //     };
        // });
    };

    render() {
        return (
            <div className="Home row">
                <div className="col s3 mycol1">
                    <TickerList
                        tickerList = {this.props.tickerList}
                        handleSelectTicker={this.props.handleSelectTicker}
                        handleSearchTicker = {this.props.handleSearchTicker}
                        />
                    {this.showSaveButton()}
                </div>
                <div className="col s9 mycol2">
                    <div className="row ChartDiv">
                        <Line data={data} />
                        <button className="chartBtn" id="empty" onClick={this.removeBtn}>
                            Remove Dataset
                        </button>
                        <button className="chartBtn" id="apple" onClick={this.appleBtn}>
                            Apple
                        </button>
                        <TickerChips 
                            selectedTickers = {this.props.selectedTickers}
                            handleRemoveChip = {this.props.handleRemoveChip}
                        />
                    </div>
                    <div className="row NotesDiv">
                        <Notes
                            notes = {this.props.notes}
                            handleAddNote={this.props.handleAddNote}
                            handleDeleteNote = {this.props.handleDeleteNote}
                            handleEditNote = {this.props.handleEditNote}
                            handleUpdateNote = {this.props.handleUpdateNote}
                            handleCancleEditNote = {this.props.handleCancleEditNote}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;