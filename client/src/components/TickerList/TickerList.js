import React, {Component} from "react";
import {Collection, CollectionItem, Button, Icon,Chip} from "react-materialize";
import './TickerList.css';
import StockAPI from "../../utils/API";

class TickerList extends Component {
    state={
        text:"",
        Tickers:[]
    };

    onInputChange = (event) => {
        this.setState({ query: event.target.value });
    };

    searchTicker = event => {
        console.log("BUTTON CLICKED");
        if (this.state.query){
            StockAPI.searchSymbol(this.state.query.trim()).then(res=>{
                console.log("API::SearchSymbol::SUCCESS");
                //add ticker to list
                let newTickers = this.state.Tickers;
                const newTIcker = {
                    ticker: this.state.query,
                    logoURL: res.data.url
                }
                newTickers.push(newTIcker);
                this.setState({ Tickers: newTickers, query: "" });
                console.log(res);
            }).catch(error=>{
                console.log("API::SearchSymbol::FAIL");
                console.log("INVALID COMPANY SYMBOL");
            });
        }
    };

    render(){

        let displayTickers = this.state.Tickers.map((tickerObj)=>{
            return (
                <CollectionItem key={tickerObj.ticker} href="#" onClick={this.props.selectHandler(tickerObj)}>
                    <Chip>
                        <img src={tickerObj.logoURL}/>
                        {tickerObj.ticker}
                    </Chip>
                </CollectionItem>
            );
        });

        const searchHeader =
            <div>
                <input
                    className='textArea'
                    placeholder='Ticker'
                    value={this.state.text}
                    onChange={this.onInputChange}
                    type="text" 
                />
                <Button onClick={this.searchTicker}><Icon left>search</Icon>Search</Button>
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
