import React,{Component} from "react";
import MyChart from "../../components/MyChart";

class Home extends Component{

    render(){
        return (
            <h1>THIS IS THE HOME PAGE</h1>,
            // canvas holding our graph
            <MyChart />
        );
    }
};

// import {myChart} from "./chart.js";
export default Home;