import React,{Component} from "react";
import "./Home.css";
import {Helmet} from "react-helmet";
import Page from "../../components/MaterializePage";
import TickerList from "../../components/TickerList";

class Home extends Component{

    render(){
        return (
            <Page
                style={
                    {
                    "background-color":"#9b179b",//<------ THEME COLOR
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
                    <div className="col s3 mycol1"><TickerList/></div>
                    <div className="col s9 mycol2">asdf</div>
                </div>
            </Page>
        );
    }
};

// import {myChart} from "./chart.js";
export default Home;