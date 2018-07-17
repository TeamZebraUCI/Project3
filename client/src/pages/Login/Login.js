import React,{Component} from "react";

class Login extends Component{

    render(){
        return (
            <div>
            <p>You must log in to view this page at {from.pathname} </p>
            <button onClick = {this.login}>Log in</button>
          </div>);
    }
};

export default Login;