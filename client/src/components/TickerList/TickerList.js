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
        this.setState({ text: event.target.value });
    };

    render(){

        let displayTickers = this.state.Tickers.map((tickerObj)=>{
            return (
                <CollectionItem href="#">
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
                <Button onClick={()=>{this.props.buttonHandler(this.state.text)}}><Icon left>search</Icon>Search</Button>
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
