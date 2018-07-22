//=====================================import React tools===============================================
//import React tools
import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";

//======================================import pages============================================================
//import pages
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NoMatchPage from "./pages/NoMatch";

//======================================import components============================================================
import Page from "./components/Page";

//======================================import API================================================================
// import API from "./utils/API";

//======================================Logic for Secured Login Page=============================================

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Public = () => <h3>Public</h3>
// const Protected = () => <h3>Protected</h3>

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   }
//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }))
//     })
//   }
//   render() {
//     const { from } = this.props.location.state || { from: { pathname: '/' } }
//     const { redirectToReferrer } = this.state

//     if (redirectToReferrer === true) {
//       return <Redirect to={from} />
//     }

//     return (
//       <div>
//         <p>You must log in to view the page</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     )
//   }
// }

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
      <p>You are not logged in.</p>
    )
))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
 
  login = (username, password) => {
      console.log("hit login")
 
 // Axios call to server. Check to see if user is in database and that password is correct, then is logged in will equal true, else is logged in will equal false 
 
    this.setState({
      isLoggedIn: true
    })
  }
 
  render() {
    console.log(this)
    return (
      <div>
            <Router>
              <Switch>
                { this.state.isLoggedIn ? <Route path="/dashboard" render={() => <Dashboard />} /> : null }
                <Route path='/public' component={Public} />
                <Route path='/login' render={() => <LoginPage login={this.login} />} />
              </Switch>
            </Router>
      </div>
    );
  }
 }
 
// =================================Daniel Logic==================================================
// const App = ()=>(
//   <Page>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route exact path="/login" component={LoginPage} />
//         <Route component={NoMatchPage} />
//       </Switch>
//     </Router>
//   </Page>
// );


export default App;
