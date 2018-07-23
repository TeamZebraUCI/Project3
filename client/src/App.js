//=====================================import React tools===============================================
//import React tools
import React, {Component} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";
import axios from "axios";
//======================================import pages============================================================
//import pages
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NoMatchPage from "./pages/NoMatch";

//======================================import API================================================================
import StockAPI from "./utils/API";

//======================================Logic for Secured Login Page=============================================
class App extends Component{
  constructor(props) {
    super(props)
 
    this.state = {
      loggedIn:false,
      username:'',
      tickerList:[]
    }
 
  }
 
  signUp = (e, username, password) => {
    e.preventDefault();
    const user = {
      "username": username,
      "password": password
    };
    console.log(user);
    axios.post("/api/user", user).then(res => {
      console.log(res);
      alert(res.data.message);
      this.setState({
        loggedIn:res.data.loggedIn,
        username:res.data.username
      });
    })
  }
 
  logIn = (e, username, password) => {
    e.preventDefault();
    const user = {
      "username": username,
      "password": password
    };
    axios.post("/api/user/login", user).then(res => {
      alert(res.data.message);
      this.setState({
        loggedIn:res.data.loggedIn,
        username:res.data.username
      });
      console.log(this.state);
    })
  }

  searchTicker = (query) => {
      if (query){
          StockAPI.searchSymbol(query.trim()).then(res=>{
              console.log("API::SearchSymbol::SUCCESS");
              //add ticker to list
              let newTickers = this.state.tickerList;
              const newTIcker = {
                  ticker: query,
                  logoURL: res.data.url
              }
              newTickers.push(newTIcker);
              this.setState({ Tickers: newTickers});
          }).catch(error=>{
              console.log("API::SearchSymbol::FAIL");
          });
      }
  };















  
  render(){
    return (
      <Router>
          <Switch>
            <Route 
              exact 
              path="/" 
              render={()=>
                <HomePage 
                  username={this.state.username}
                  tickerList = {this.state.tickerList}
                  handleSearchTicker = {this.searchTicker}
                />} />
            <Route
              exact
              path="/login"
              render={()=>
                <LoginPage
                loggedIn={this.state.loggedIn}
                username={this.state.username}
                signUp={this.signUp}
                logIn={this.logIn}
              />}
            />
            <Route render={()=><NoMatchPage />} />
          </Switch>
      </Router>
    );
  }
 }
 
 
 export default App;
