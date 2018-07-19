import React,{Component} from "react";
import "./Home.css";
import {Helmet} from "react-helmet";
import Page from "../../components/MaterializePage";

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
            > 
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <h1>THIS IS THE HOME PAGE</h1>
            </Page>
        );
    }
};

// import {myChart} from "./chart.js";
export default Home;