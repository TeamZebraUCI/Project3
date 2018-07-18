import React,{Component} from "react";
import LoginComp from '../../components/Login/Login';
import "./Login.css";



class Login extends Component{

    render(){
        return (
            <div id="container">
                <LoginComp />
            </div>
        );
    }
};

export default Login;