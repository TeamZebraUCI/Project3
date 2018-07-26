import React, {Component} from "react";
import {Collection, CollectionItem, Button, Icon,Input} from "react-materialize";
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
    };

    render(){
        let displayTickers = this.props.tickerList.map((tickerObj)=>{
            return (
                <CollectionItem className="row" key={tickerObj.ticker} onClick={()=>{this.props.handleSelectTicker(tickerObj)}}>
                    <div className="tickerLogoDiv">
                        <img className="tickerLogo" src={tickerObj.logoURL}/>
                    </div>
                    <div className="tickerNameDiv">
                        {tickerObj.ticker}
                    </div>
                </CollectionItem>
            );
        });

        const searchHeader =
            <div>
                <h5>Companies</h5>
                <Input
                    className='textArea'
                    placeholder='Ticker'
                    value={this.state.query}
                    onChange={this.onInputChange}
                    type="text" 
                />
                <Button onClick={this.searchBtn}>
                    <Icon left>search</Icon>Search
                </Button>
            </div>;


        return(
            <Collection className="TickerList" header={searchHeader}>
                {displayTickers}
            </Collection>
        );
    }
};

export default TickerList;
