import React, { Component } from 'react';
import './login.css'
import history from '../../history';

class RootLogin extends Component {
    handleConnect(){
        history.push('/offers')
    }
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h1>Welcome</h1>
                    <form className="form">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={this.handleConnect.bind(this)} id="login-button">Login</button>
                    </form>
                </div>
                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default RootLogin;