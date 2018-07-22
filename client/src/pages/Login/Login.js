import React,{Component} from "react";
import LoginComp from '../../components/Login/Login';
import "./Login.css";
import {Helmet} from "react-helmet";
import Page from "../../components/MaterializePage";



class Login extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
<<<<<<< HEAD
            <div id="container">
                <LoginComp login = {this.props.login}/>
            </div>
=======
            <Page
                style={
                    {
                    "background-color":"#9b179b",//<------ THEME COLOR
                    }
                }
                text="P3"//<---- LOGO TEXT
                promptLogin = {false}
            >
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <div id="container">
                    <LoginComp />
                </div>
            </Page>
>>>>>>> origin/master
        );
    }
};

export default Login;