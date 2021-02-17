import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email" >
          Email
          <input id="email" type="email"/>
        </label>
        <label htmlFor="password" >
          Senha
          <input id="password" type="password"/>
        </label>
      </div>
    );
  }
}

export default Login;