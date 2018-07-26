import React, {Component} from "react";
import {Chip} from "react-materialize";
import "./TickerChips.css";

class TickerChips extends Component{

    makeChip(tickerObj,index){
        return (
            <Chip onClick={()=>{this.props.handleRemoveChip(index)}}>
                <img src={tickerObj.logoURL} alt={tickerObj.ticker} />
                {tickerObj.ticker}
            </Chip>
        );
    }

    render(){
        let displayChips = this.props.selectedTickers.map((tickerObj,index)=>{
            return this.makeChip(tickerObj,index);
        });
        return (
            <div className="TickerChips">
                {displayChips}
            </div>
        );
    }

}

export default TickerChips;