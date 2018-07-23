import React, {Component} from "react";
import {Collection, CollectionItem, Button, Icon,Chip} from "react-materialize";
import './TickerList.css';

class TickerList extends Component {
    state={
        query:"",
    };

    onInputChange = (event) => {
        this.setState({ query: event.target.value });
    };

    searchBtn = ()=>{
        this.props.handleSearchTicker(this.state.query);
        this.setState({query:""});
        console.log("FLAG");
    };

    render(){

        // let displayTickers = this.state.Tickers.map((tickerObj)=>{
        let displayTickers = this.props.tickerList.map((tickerObj)=>{
            return (
                <CollectionItem key={tickerObj.ticker} href="#" onClick={()=>{this.props.selectHandler(tickerObj)}}>
                    <Chip>
                        <img src={tickerObj.logoURL}/>
                        {tickerObj.ticker}
                    </Chip>
                </CollectionItem>
            );
        });

        const searchHeader =
            <div>
                <h5>Companies</h5>
                <input
                    className='textArea'
                    placeholder='Ticker'
                    value={this.state.query}
                    onChange={this.onInputChange}
                    type="text" 
                />
                <Button onClick={this.searchBtn}><Icon left>search</Icon>Search</Button>
            </div>;


        return(
            <Collection className="TickerList" header={searchHeader}>
                {displayTickers}
            </Collection>
        );
    }
};

export default TickerList;
