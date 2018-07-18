import MyChart from "../../components/MyChart";
import React,{Component, Fragment} from "react";
import Notes from '../../components/Notes/Notes'

class Home extends Component{

    render(){
        return (
            <Fragment>
            <h1>THIS IS THE HOME PAGE</h1>
            <MyChart />
            <Notes />
            </Fragment>
        );
    }
};

// import {myChart} from "./chart.js";
export default Home;