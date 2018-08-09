//=====================================import React tools===============================================
//import React tools
import React, {Component} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";
import axios from "axios";
import Helmet from "react-helmet";
//======================================import pages============================================================
//import pages
import HomePage from "./pages/Home";//const HomePage = require ("./pages/Home")
import LoginPage from "./pages/Login";
import NoMatchPage from "./pages/NoMatch";

import Header from "./components/Header";
import Footer from "./components/Footer";

//======================================import API================================================================
import StockAPI from "./utils/API";

//======================================Logic for Secured Login Page=============================================
class App extends Component{
  constructor(props) {
    super(props)

    const sessionState = sessionStorage.getItem("state");

    if(sessionState){
      this.state = JSON.parse(sessionStorage.getItem("state"));
    }else{
      this.state = {
        loggedIn:false,
        username:'',//username starts as empty string
        tickerList:[],
        selectedTickers:[],
        notes:[]
      }
    }
  }

  render(){
    const pageStyle = {
      "backgroundColor": "#330066",//<------ THEME COLOR
    }

    return (
      <div>
        <Helmet>
          <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"></link>
        </Helmet>

        <Header
          style = {pageStyle}
          text = {<img className="stockLogo" alt="Our Logo" src="Stock_Run_Logo.jpg"></img>}
          navItem = {false}
          promptLogin = {true}
          username = {this.state.username}
        />

        <div className="Page row">
          <div className="col s1"></div>
          <div className="col s10">
            <Router>
              <Switch>

                <Route 
                  exact 
                  path="/" 
                  render={()=>
                    <HomePage 
                      username={this.state.username}//home page doesn't have access to username yet, untill we pass it with this line of code
  
                      logOut={this.logOut}

                      tickerList = {this.state.tickerList}
                      selectedTickers = {this.state.selectedTickers}
                      handleSearchTicker = {this.searchTicker}
                      handleSelectTicker = {this.selectTicker}

                      handleRemoveChip = {this.removeChip}

                      notes = {this.state.notes}
                      handleAddNote = {this.addNote}
                      handleDeleteNote = {this.deleteNote}
                      handleEditNote = {this.editNote}
                      handleUpdateNote = {this.updateNote}
                      handleCancleEditNote = {this.cancleEditNote}
                    />
                  }
                />

                <Route
                  exact
                  path="/login"
                  render={()=>
                    <LoginPage
                      loggedIn={this.state.loggedIn}
                      username={this.state.username}
                      signUp={this.signUp}
                      logIn={this.logIn}
                      logOut={this.logOut}
                    />
                  }
                />

                <Route render={()=><NoMatchPage />} />

              </Switch>
            </Router>
          </div>
          <div className="col s1"></div>
        </div>

        <Footer style={pageStyle} />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>

      </div>
    );
  };
 
  signUp = (e, username, password) => {
    e.preventDefault();
    const user = {
      "username": username,//this is only equal to the input from the user
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
    });
    // sessionStorage.setItem("state",JSON.stringify(this.state)); same again
  }

  componentWillMount(){
    this.isLoggedIn()
  }

  //correct way to persist state, in a safe way to keep user information up to date Not through session storage.
  isLoggedIn = ()=>{
    axios.get("/api/user/isLoggedIn").then(res => {
      console.log(res.data);
      this.setState({
        loggedIn:res.data.loggedIn,
        username:res.data.username,
      })
    })
  }
 
  logIn = (e, username, password) => {
    console.log("login Hit");
    e.preventDefault();
    const user = {
      "username": username,
      "password": password
    };
    axios.post("/api/user/login", user).then(res => {
      console.log(res.data);
      alert(res.data.message);
      this.setState({
        loggedIn:res.data.loggedIn,
        username:res.data.username,//username=res.data.username that is returned from login, app.js "state" is the only thing that posseses username
      });
    })
  }

  logOut = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.get("/api/user/logOut").then(res => {
      console.log(res.data);
      alert(res.data.message);
      this.setState({
        loggedIn:res.data.loggedIn,
        username:res.data.username,//username=res.data.username that is returned from login, app.js "state" is the only thing that posseses username
      });
      
      
    })

    this.setState({
      loggedIn: false,
      username:"",
      tickerList:[],
      notes:[]
    });
    console.log("saving the state below");
    console.log(this.state);

    // sessionStorage.setItem("state",JSON.stringify(this.state)); do no need to save sesssion info
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
              sessionStorage.setItem("state",JSON.stringify(this.state));
          }).catch(error=>{
              console.log("API::SearchSymbol::FAIL");
          });
      }
  };

  selectTicker = (tickerObj)=>{
    for (let i=0; i<this.state.selectedTickers.length; i++){
      if (tickerObj.ticker === this.state.selectedTickers[i].ticker){
        return;
      }
    }
    let newSelectedTickers = this.state.selectedTickers;
    const selectedTicker = tickerObj;
    newSelectedTickers.push(selectedTicker);
    this.setState({selectedTickers:newSelectedTickers});
    sessionStorage.setItem("state",JSON.stringify(this.state));
}

  removeChip = (tickerIndex)=>{
    let newSelectedTickers = this.state.selectedTickers;
    newSelectedTickers.splice(tickerIndex,1);
    this.setState({selectedTickers:newSelectedTickers});
    sessionStorage.setItem("state",JSON.stringify(this.state));
  }





  addNote = (noteText)=>{
    let newNotes = this.state.notes;
    newNotes.push({
      text:noteText,
      beingEdited:false
    });
    this.setState({notes:newNotes});
    sessionStorage.setItem("state",JSON.stringify(this.state));
  }

  deleteNote = (noteIndex)=>{
    let newNotes = this.state.notes;
    newNotes.splice(noteIndex,1);
    this.setState({notes:newNotes});
    sessionStorage.setItem("state",JSON.stringify(this.state));
  }

  updateNote = (noteText,noteIndex)=>{
    let newNotes = this.state.notes;
    newNotes[noteIndex].text = noteText;
    newNotes[noteIndex].beingEdited = false;
    this.setState({notes:newNotes});
    sessionStorage.setItem("state",JSON.stringify(this.state));
  }

  editNote = (noteIndex)=>{
    let newNotes = this.state.notes;
    newNotes[noteIndex].beingEdited = true;
    this.setState({notes:newNotes});    
  }

  cancleEditNote = (noteIndex)=>{
    let newNotes = this.state.notes;
    newNotes[noteIndex].beingEdited = false;
    this.setState({notes:newNotes});
  }

  
 }
 
 
 export default App;
