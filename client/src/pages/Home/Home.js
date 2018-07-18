import React,{Component} from "react";
import "./Home.css";
import {Helmet} from "react-helmet";


class Home extends Component{
    render(){
        return (
            <div>
                <Helmet>
                    <title>HOME</title>
                </Helmet>
                <h1>THIS IS THE HOME PAGE</h1>
            </div>
        );
    }
};

// import {myChart} from "./chart.js";
export default Home;