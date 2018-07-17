import React, { Component, Fragment } from 'react'

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
        console.log(`Testing: ${this.state.user} ${this.state.password}`);
        this.setState({
            user: "",
            password: ""
        });
    };

    render() {
        return (
            <Fragment>
            <form>
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
</Fragment>
        )
    }
}
