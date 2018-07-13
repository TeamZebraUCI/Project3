import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";

// example API.search use
console.log("Making Call to API");
API.search(["aapl"]).then(res=>{
  console.log(res);
});
console.log("Searching for company symbol");
API.searchSymbol("Google").then(res=>{
  console.log(res);
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
