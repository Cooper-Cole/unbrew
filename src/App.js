import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// import ReactDOM from 'react-dom';

// import MainForm from './components/mainform.js';

import Navigation from './components/navigation';
import LandingPage from './components/landing';
import SignUpPage from './components/signup';
import SignInPage from './components/signin';
import PasswordForgetPage from './components/passwordForget';
import HomePage from './components/mainform.js';
import AccountPage from './components/account';

import CoffeePage from './components/coffee';
import FirebasePage from './components/Firebase/firebase-page';

import * as ROUTES from './routes/routes';

import { withFirebase } from './components/Firebase';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
      ? this.setState({ authUser })
      : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render () {
    return(
      <Router>
        <div>
          <Navigation authUser={this.state.authUser}/>

          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.FIREBASE} component={FirebasePage} />
          <Route path={ROUTES.COFFEE} component={CoffeePage} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);