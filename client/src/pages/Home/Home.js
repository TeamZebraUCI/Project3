import React,{Component} from "react";
import "./Home.css";
import {Helmet} from "react-helmet";
import Page from "../../components/MaterializePage";
import Note from "../../components/Notes";
import List from "../../components/TickerList";
import StockAPI from "../../utils/API";


class Home extends Component{

<<<<<<< HEAD
    selectTicker = (event)=>{
        console.log(event);
    };

=======
    state={
        tickerList:[]
    }

    searchTicker = query => {
        console.log(query)
        console.log("USING SEARCHTICKER FROM HOMEPAGE");
        if (this.state.query){
            StockAPI.searchSymbol(this.state.query.trim()).then(res=>{
                let newTickerList = this.state.tickerList;
                const newTicker = {
                    ticker: this.state.query,
                    logoURL: res.data.url
                }
                newTickerList.push(newTicker);
                this.setState({ tickerList: newTickerList, query: "" });
                console.log(res);
            }).catch(error=>{
                console.log("API::SearchSymbol::FAIL");
            });
        }
    };


>>>>>>> dd805e6d3c3629e2de1a0a060e150238f7ffd46b
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
<<<<<<< HEAD
                    <div className="col s3 mycol1">
                    <TickerList
                        selectHandler={this.selectTicker}
                    /></div>
                    <div className="col s9 mycol2">asdf</div>
=======
                    <div className="col s3 mycol1"><List
                        buttonHandler={this.searchTicker}
                        query = {this.state.query}
                        inputChangeHandler={this.onTickerInputChange}                    
                    /></div>
                    <div className="col s9 mycol2">
                        <div className="row">GRAPH HERE</div>
                        <div className="row"><Note/></div>
                    </div>
>>>>>>> dd805e6d3c3629e2de1a0a060e150238f7ffd46b
                </div>
            </Page>
        );
    }
};

// import {myChart} from "./chart.js";
export default Home;