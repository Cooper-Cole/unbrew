import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// import ReactDOM from 'react-dom';

// import MainForm from './components/mainform.js';

import Navigation from './components/navigation';
import LandingPage from './components/landing';
import SignUpPage from './components/signup.js';
import SignInPage from './components/signin';
import PasswordForgetPage from './components/passwordForget';
import HomePage from './components/mainform.js';
import AccountPage from './components/account';

import * as ROUTES from './routes/routes';

export default class App extends React.Component{

  // constructor(props) {
  //   super(props);
  //   this.state = { posts: [] };
  // }

  render () {
    return(
      <Router>
        <div>
          <Navigation />

          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        </div>
      </Router>
    )

    // return(
    //   <MainForm />
    // )
  }
}