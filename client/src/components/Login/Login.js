import React, { Component } from 'react';
import "./Login.css";
import axios from "axios";

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

        const user = {
            "username": this.state.user,
            "password": this.state.password
        };
        console.log(user);
        axios.post("/api/user", user)
            .then(res => {
                console.log(res);
            })
        }

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
