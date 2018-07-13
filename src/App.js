import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

console.log("Making Call to API");
const companySymbol = "aapl";
const route = "https://api.iextrading.com/1.0/stock/"+companySymbol+"/company";

$.get(route,(data)=>{
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
