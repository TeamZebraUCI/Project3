import React, { Component } from 'react'

const styles = {
    display: "inline-block",
    width: 'auto',
}

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
        if (this.state.user && this.state.password) {
        console.log(`Testing: ${this.state.user} ${this.state.password}`);
        this.setState({
            user: "",
            password: ""
        });
        }
    };

    render() {
        return (
            <div style={styles}>
            <form>
                <span>Login: </span>
                <input
                    placeholder='Username'
                    name='user'
                    value={this.state.user}
                    onChange={this.handleInputChange}
                    type="text" />
                <input
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="text" />
                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
            </div>
        )
    }
}
