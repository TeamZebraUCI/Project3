import React,{Component, Fragment} from "react";
import LoginComp from '../../components/Login/Login'

class Login extends Component{

    render(){
        return (
            <Fragment>
            <h1>THIS IS THE LOGIN PAGE</h1>
            <LoginComp />
            </Fragment>
        );
    }
};

export default Login;