import React, { Component } from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import './login.css';

export default class Login extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      code: '',
      errorMessage: '',
    };

    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFailure = this.handleFailure.bind(this);
  }

  handleSuccess(data: any) {
    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  handleFailure(error: any) {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }

  render(): any {
    return (
      <div className="login-container">
        <LinkedIn
          clientId="81lx5we2omq9xh"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://localhost:3000/linkedin"
        >
          Click to Signin with LinkedIn
        </LinkedIn>
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
      </div>
    );
  }
}
