import React,{Component} from "react";
import LoginComp from '../../components/Login/Login';
import "./Login.css";



class Login extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div id="container">
                <LoginComp login = {this.props.login}/>
            </div>
        );
    }
};

export default Login;