import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import Login from './views/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/linkedin" component={LinkedInPopUp} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
