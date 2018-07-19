import React, {Component} from "react";
import {Collection, CollectionItem, Button, Icon} from "react-materialize";
import './TickerList.css';

class TickerList extends Component {
    state={
        query:"",
        Tickers:["ticker1","ticker2"]
    };

    onInputChange = (event) => {
        this.setState({ query: event.target.value });
    };

    onClick = event => {
        console.log("BUTTON CLICKED");
        if (this.state.query){
            //add ticker to state (and theirfore the list)
            let newTickers = this.state.Tickers;
            newTickers.push(this.state.query);
            this.setState({ Tickers: newTickers, query: "" });    
        }
    };

    render(){

        let displayTickers = this.state.Tickers.map((ticker)=>{
            return (
                <CollectionItem href="#"    >{ticker}</CollectionItem>
            );
        });

        const searchHeader =
            <div>
                <Button onClick={this.onClick}><Icon left>search</Icon></Button>
                    <input
                        className='textArea'
                        placeholder='Create a new note!'
                        value={this.state.query}
                        onChange={this.onInputChange}
                        type="text" 
                    />
            </div>;


        return(
            <div className="TickerList">
                <Collection header={searchHeader}>
                    {displayTickers}
                </Collection>
            </div>
        );
    }
};

export default TickerList;
