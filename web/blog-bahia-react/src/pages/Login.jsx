import React, { Component } from 'react';
import './Login.css'

import { auth } from '../services/api';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.changeState = this.changeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeState({ name, value }) {
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const response = await auth(this.state)
    const { history } = this.props;
    const { token } = response;
    if( token ) {
      sessionStorage.setItem('token', response.token);
      history.push('/admin');
    }
    console.log(response)
  }

  render() {
    return (
      <div className="login-component">
        <h1 className="title">Login</h1>

        <label htmlFor="email" >
          Email
          <input
            id="email"
            type="email"
            name="email"
            className="input-email"
            onChange={({ target }) => this.changeState(target)}
          />
        </label>

        <label htmlFor="password" >
          Senha
          <input
            id="password"
            type="password"
            name="password"
            className="input-password"
            onChange={({ target }) => this.changeState(target)}
          />
        </label>

        <button
          type="button"
          className="button-login"
          onClick={this.handleSubmit}
        >
          Entrar
        </button>
        <button
          type="button"
          className="button-forgot"
        >
          Esqueci a senha
        </button>
      </div>
    );
  }
}

export default Login;