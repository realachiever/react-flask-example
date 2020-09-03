import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Login from './views/login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/linkedin" component={LinkedInPopUp} />
      <Route exact path="/" component={Login} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
