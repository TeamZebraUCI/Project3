import React, { Component } from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import Page from "../../components/MaterializePage";
<<<<<<< HEAD
import MyChart from "../../components/MyChart/myChart";
=======
import TickerList from "../../components/TickerList";

>>>>>>> origin/master

class Home extends Component {

<<<<<<< HEAD
    render() {
=======
    selectTicker = (tickerObj)=>{
        console.log(tickerObj);
    };

    render(){
>>>>>>> origin/master
        return (
            <Page
                style={
                    {
<<<<<<< HEAD
                        "background-color": "#9b179b",//<------ THEME COLOR
=======
                    "backgroundColor":"#9b179b",//<------ THEME COLOR
>>>>>>> origin/master
                    }
                }
                text="P3"//<---- LOGO TEXT
                promptLogin={true}
                username={this.props.username}
            >
                <Helmet>
                    <title>Home</title>
                </Helmet>
<<<<<<< HEAD
                <h1>THIS IS THE HOME PAGE</h1>
                <div class="wrapper">
                    <canvas id="myChart" width="1600" height="900"></canvas>
                </div>
                <button id="nike">
                    Nike
                </button>
                <button id="lexus">
                    Lexus
                </button>
                <button id="apple">
                    Apple
                </button>
                <button id="addYear">
                    Add time
                </button>
                <button id="removeYear">
                    Remove time
                </button>
                <button id="empty">
                    Remove Dataset
                </button>
=======
                <div className="Home row">
                    <div className="col s3 mycol1">
                    <TickerList
                        selectHandler={this.selectTicker}
                    /></div>
                    <div className="col s9 mycol2">
                        <div className="row ChartDiv">ChartComponent</div>
                        <div className="row NotesDiv">NotesComponent</div>
                    </div>
                </div>
>>>>>>> origin/master
            </Page>
                    );
                }
            };
            
export default Home;