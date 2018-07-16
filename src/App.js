import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
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
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
