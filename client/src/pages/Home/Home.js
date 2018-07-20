import React, { Component } from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import Page from "../../components/MaterializePage";
import MyChart from "../../components/MyChart/myChart";

class Home extends Component {

    render() {
        return (
            <Page
                style={
                    {
                        "background-color": "#9b179b",//<------ THEME COLOR
                    }
                }
                text="P3"//<---- LOGO TEXT
                promptLogin={true}
                username={this.props.username}
            >
                <Helmet>
                    <title>Home</title>
                </Helmet>
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
            </Page>
                    );
                }
            };
            
export default Home;