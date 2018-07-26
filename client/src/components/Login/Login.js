import React, { Component } from 'react';
import "./Login.css";
import axios from "axios";


export default class Login extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      username: "",
      password: "",
      showLogin:true,
      showSignUp:false
    };
  }
 
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
 
  showLogin = () => {
    this.setState({
      showLogin:true,
      showSignUp:false,
      username:"", password:""
    })
  }
  showSignUp = () => {
        this.setState({
          showLogin:false,
          showSignUp:true,
          username:"", password:""
        })
  }
 
  render() {
    console.log(this)
    let logInOrLogOut = this.props.loggedIn
      ?
      <div className="Login">
        <form>
          <h1 className="title">Log Out: </h1>
          <button className="submitBtn" onClick={this.props.logOut}>Log Out</button>
        </form>
      </div>
      :
      <div className="Login">
        <form>
          { this.state.showLogin &&
            <div className="login_sign-up-form">
              <h1 className="title">Login: </h1>
              <input
                className="prompt"
                placeholder='Username'
                name='username'
                value={this.state.user}
                onChange={this.handleInputChange}
                type="text"
              />
              <input
                className="prompt"
                placeholder='Password'
                name='password'
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
              />
              <button className="submitBtn" type="button" onClick={(e) => this.props.logIn(e, this.state.username, this.state.password)}>Log In</button>
              <p className="signUpToggleButton" onClick={this.showSignUp}>Or Sign Up</p>
            </div>
          }
          { this.state.showSignUp &&
            <div className="login_sign-up-form">
              <h1 className="title">Sign Up: </h1>
              <input
                className="prompt"
                placeholder='Username'
                name='username'
                value={this.state.user}
                onChange={this.handleInputChange}
                type="text"
              />
              <input
                className="prompt"
                placeholder='Password'
                name='password'
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
              />
              <button className="submitBtn" type="button" onClick={(e) => this.props.signUp(e, this.state.username, this.state.password)}>Sign Up</button>
              <p className="signUpToggleButton" onClick={this.showLogin}>Or Login</p>
            </div>
          }
        </form>
      </div>
 
    return (
      <div>
      {logInOrLogOut}
      </div>
    )
  }
 }