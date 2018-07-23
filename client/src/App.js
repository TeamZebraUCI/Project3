//=====================================import React tools===============================================
//import React tools
import React, {Component} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter, 
  Switch 
} from "react-router-dom";
import axios from "axios";
//======================================import pages============================================================
//import pages
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NoMatchPage from "./pages/NoMatch";

//======================================import API================================================================
// import API from "./utils/API";

//======================================Logic for Secured Login Page=============================================
class App extends Component{
  constructor(props) {
    super(props)
 
    this.state = {
      loggedIn:false,
      username:''
    }
 
  }
 
  signUp = (e, username, password) => {
    let self = this
    e.preventDefault
    const user = {
      "username": username,
      "password": password
    };
    console.log(user);
    axios.post("/api/user", user).then(res => {
      console.log(res);
      alert(res.data.message);
      self.setState({
        loggedIn:res.data.loggedIn,
        username:res.data.username
      })
    })
  }
 
  logIn = (e, username, password) => {
    let self = this
    e.preventDefault
    const user = {
      "username": username,
      "password": password
    };
    console.log(user);
    axios.post("/api/user/login", user).then(res => {
      console.log(res);
      alert(res.data.message);
      self.setState({
        loggedIn:res.data.loggedIn,
        username:res.data.username
      })
    })
  }

  
  render(){
    return (
      <Router>
        <div>
          {/* <div>
            <h1>P3</h1>
            <div>
              { this.state.loggedIn
                ?
                  <Link to="/login"><p>{this.state.username}</p></Link>
                :
                  <Link to="/login"><img src="data:image/jpeg;base64,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"/></Link>
              }
            </div>
          </div> */}
          <Switch>
            <Route exact path="/" render={()=><HomePage username=""/>} />
            <Route
              exact
              path="/login"
              render={()=><LoginPage
                loggedIn={this.state.loggedIn}
                username={this.state.username}
                signUp={this.signUp}
                logIn={this.logIn}
              />}
            />
            <Route render={()=><NoMatchPage />} />
          </Switch>
        </div>
      </Router>
    );
  }
 }
 
 
 export default App;
