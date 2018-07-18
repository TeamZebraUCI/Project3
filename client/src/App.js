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
import Helmet from "react-helmet";

//======================================import pages============================================================
//import pages
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NoMatchPage from "./pages/NoMatch";

//======================================import components============================================================
import Page from "./components/MaterializePage";

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
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

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

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <AuthButton/>
//           <ul>
//             <li><Link to = '/public'>Public Page</Link></li>
//             <li><Link to = '/protected'>Protected Page</Link></li>
//           </ul>

//           <Route path = '/public' component = {Public} />
//           <Route path = '/login' component = {Login} />
//           <PrivateRoute path = '/protected' component = {Protected} />
//         </div> 
//       </Router>
//     );
//   }
// }

// =================================Daniel Logic==================================================
const App = ()=>(
  <Page>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  </Page>
);


export default App;
