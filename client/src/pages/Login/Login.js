import React,{Component} from "react";
import LoginComp from '../../components/Login/Login';
import "./Login.css";



class Login extends Component{

    render(){
        return (
            <div id="container">
                <LoginComp
                    loggedIn={this.props.loggedIn} 
                    username={this.props.username} 
                    signUp={this.props.signUp}
                    logIn={this.props.logIn}
                    logOut={this.props.logOut}
                    />
            </div>
        );
    }
};

export default Login;