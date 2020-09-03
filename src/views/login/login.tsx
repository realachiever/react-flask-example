import React, { Component } from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import { CLIENT_ID, REDRIECTED_URL } from '../../constants/config';
import { ILoginState } from './constants';
import './login.css';

export default class Login extends Component<any, ILoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      code: '',
      successMessage: '',
      errorMessage: '',
      loggedIn: false,
    };

    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFailure = this.handleFailure.bind(this);
  }

  handleSuccess(data: any) {
    fetch(`/index`).then(res => res.json()).then(result => {
      this.setState({
        code: data.code,
        successMessage: result.message,
        errorMessage: '',
        loggedIn: true
      });
    });
  }

  handleFailure(error: any) {
    this.setState({
      code: '',
      successMessage: '',
      errorMessage: error.errorMessage,
      loggedIn: false,
    });
  }

  render(): any {
    return (
      <div className="login-container">
        {!this.state.loggedIn &&
          <LinkedIn
            clientId={CLIENT_ID}
            onFailure={this.handleFailure}
            onSuccess={this.handleSuccess}
            redirectUri={REDRIECTED_URL}
          >
            Click to Signin with LinkedIn
          </LinkedIn>
        }
        {this.state.successMessage && <div>{this.state.successMessage}</div>}
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
      </div>
    );
  }
}
