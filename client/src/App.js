//import React tools
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";

//import components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/Navbar/Navbar'
import Search from './components/Search/Search'

//import API
import API from "./utils/API";

const App = ()=>{
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
};

export default App;
