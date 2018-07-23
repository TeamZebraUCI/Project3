import React,{Component} from "react";
import "./Home.css";
import {Helmet} from "react-helmet";
import Page from "../../components/MaterializePage";
import TickerList from "../../components/TickerList";
import Notes from "../../components/Notes";
import SaveButton from "../../components/SaveButton";


class Home extends Component{

    selectTicker = (tickerObj)=>{
        console.log(tickerObj);
    };

    render(){
        return (
            <Page
                style={
                    {
                    "backgroundColor":"#9b179b",//<------ THEME COLOR
                    }
                }
                text="P3"//<---- LOGO TEXT
                promptLogin={true}
                username = {this.props.username}
            >
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <div className="Home row">
                    {this.props.username}
                    <div className="col s3 mycol1">
                        <TickerList
                            tickerList = {this.props.tickerList}
                            selectHandler={this.selectTicker}
                            handleSearchTicker = {this.props.handleSearchTicker}
                            />
                        <SaveButton/>
                    </div>
                    <div className="col s9 mycol2">
                        <div className="row ChartDiv">ChartComponent</div>
                        <div className="row NotesDiv"><Notes/></div>
                    </div>
                </div>
            </Page>
        );
    }
};

// import {myChart} from "./chart.js";
export default Home;