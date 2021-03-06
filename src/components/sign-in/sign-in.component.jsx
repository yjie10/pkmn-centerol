import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { ReactComponent as Logo } from '../../assets/google.svg';

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

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

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>Sign In</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />
          <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />
          <CustomButton type='submit'>Sign In</CustomButton>
          <div className='alt-signin'>
            <span>OR</span>
          </div>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            <Logo className='logo' />
            Sign In With Google</CustomButton>
        </form>
      </div>
    )
  }
};

export default SignIn;