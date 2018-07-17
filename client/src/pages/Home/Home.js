import React,{Component} from "react";
import {myChart} from "./chart.js";

class Home extends Component{

    render(){
        return (
            <h1>THIS IS THE HOME PAGE</h1>,
            // canvas holding our graph
            <canvas width="1600" height="900">{myChart}</canvas>
        );
    }
};

// import {myChart} from "./chart.js";
export default Home;