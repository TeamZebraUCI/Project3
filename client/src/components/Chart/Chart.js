import React, {Component} from "react";
import "./Chart.css";
import TickerChips from "../../components/TickerChips";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {Button} from "react-materialize";
import stockAPI from "../../utils/API";


class Chart extends Component {

  state={
    data:[  
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page H', uv: 3490, pv: 4300, amt: 2100},
    ]
  };

  updateData(){

    if (this.props.selectedTickers.length){
      stockAPI.getData(this.props.selectedTickers.map(tickerObj=>tickerObj.ticker)).then(res=>{
        console.log(res);
      });
    }
  };


  render(){

    const keys = ["uv","pv","amt"];
    let counter = 0;

    const displayLines = this.props.selectedTickers.map(tickerObj=>{
      return (
        <Line key={tickerObj.ticker+'-Line'} type="monotone" dataKey={keys[counter++]} stroke="#8884d8" />
      );
    });

    return (
      <div className="Chart">
        <ResponsiveContainer width="100%" height={600}>
          <LineChart data={this.state.data} >
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            {displayLines}
          </LineChart>
        </ResponsiveContainer>
        <TickerChips
            selectedTickers = {this.props.selectedTickers}
            handleRemoveChip = {this.props.handleRemoveChip}
          />
        <Button onClick={()=>{this.updateData()}} >Update Chart</Button>
      </div>
    );
  };
};

export default Chart;