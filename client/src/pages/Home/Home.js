import React, { Component } from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import Page from "../../components/MaterializePage";
import MyChart from "../../components/MyChart/myChart";
import TickerList from "../../components/TickerList";


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

                {/* <div className="wrapper">
                    <canvas id="myChart" width="1600" height="900"></canvas>
                </div> */}
                {/* <button id="nike">
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
                </button> */}

                <div className="Home row">
                    <div className="col s3 mycol1">
                        <TickerList
                            selectHandler={this.selectTicker}
                        /></div>
                    <div className="col s9 mycol2">
                        {/* <div className="row ChartDiv">ChartComponent</div> */}
                        <div className="wrapper">
                            <canvas className="row ChartDiv" id="myChart" width="1600" height="900"></canvas>
                        </div>
                        <button className="chartBtn" id="empty">
                            Remove Dataset
                        </button>
                        <button className="chartBtn" id="nike">
                            Nike
                        </button>
                        <button className="chartBtn" id="lexus">
                            Lexus
                        </button>
                        <button className="chartBtn" id="apple">
                            Apple
                        </button>
                        <div className="row NotesDiv">NotesComponent</div>
                    </div>
                </div>
            </Page>
        );
    }
};

export default Home;