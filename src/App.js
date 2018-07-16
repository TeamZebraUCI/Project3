import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import './App.css';
import API from "./utils/API";

// example API.search use
API.getData(["aapl"]).then(res=>{
  console.log("API::getData::SUCCESS");
  console.log(res);
}).catch(error=>{
  console.log("API::getData::FAIL");
  console.log("INVALID COMPANY SYMBOL");  
});

API.searchSymbol("aapl").then(res=>{
  console.log("API::SearchSymbol::SUCCESS");
  console.log(res);
}).catch(error=>{
  console.log("API::SearchSymbol::FAIL");
  console.log("INVALID COMPANY SYMBOL");
});
;



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
