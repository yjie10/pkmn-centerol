import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>Sign In</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />
          <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    )
  }
};

export default SignIn;