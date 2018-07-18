import React, { Component } from 'react';
import "./Login.css";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            user: "",
            password: "",
        };
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        console.log(`Testing: ${this.state.user} ${this.state.password}`); //<------ DO SOMETHING WITH CREDENTIALS
        this.setState({
            user: "",
            password: ""
        });
    };

    render() {
        return (
            <div className="Login">
            <form>
                <h1 className="title">Login: </h1>
                <input className="prompt"
                    placeholder='Username'
                    name='user'
                    value={this.state.user}
                    onChange={this.handleInputChange}
                    type="text" />
                <input className="prompt"
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="password" />
                <button className="submitBtn" onClick={this.handleFormSubmit}>Submit</button>
            </form>
            </div>
        )
    }
}
