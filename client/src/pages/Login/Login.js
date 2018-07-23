import React,{Component} from "react";
import LoginComp from '../../components/Login/Login';
import "./Login.css";
import {Helmet} from "react-helmet";
import Page from "../../components/MaterializePage";



class Login extends Component{

    render(){
        return (
            <Page
                style={
                    {
                    "backgroundColor":"#9b179b",//<------ THEME COLOR
                    }
                }
                text="P3"//<---- LOGO TEXT
                promptLogin = {false}
            >
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <div id="container">
                    <LoginComp 
                      loggedIn={this.props.loggedIn} 
                      username={this.props.username} 
                      signUp={this.props.signUp}
                      logIn={this.props.logIn}
                    />
                </div>
            </Page>
        );
    }
};

export default Login;