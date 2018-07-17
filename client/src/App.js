//import React tools
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";

//import components
import Title from './components/Title'
//import API
import API from "./utils/API";

const App = ()=>(
  <Router>
    <div>
      <Title>Raven Stock</Title>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
