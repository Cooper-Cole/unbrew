import React from 'react';
import * as ROUTES from '../routes/routes';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { withFirebase } from './Firebase';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const stylePage = {
  styleHead : {
      marginLeft: "25%",
      fontFamily: "Verdana",
      fontWeight: "bold",
      paddingBottom: "5%",
      paddingTop: "5%"
  },
  styleButton: {
    marginTop: "5%",
    marginLeft: "35%",
    marginBottom: "5%"
  }
}

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE};
  }

  onSubmit = event => {
    const info = {
      email: this.state.email,
      password: this.state.password,
    };

    const { email, password } = this.state;

    //signin to Firebase Auth using existing account info
    this.props.firebase
    .doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push(ROUTES.HOME);
    })
    .catch(error => {
      this.setState({ error });
    });

    //pass authenticated email to server
    axios
    .post('http://localhost:9000/signin', { info })
    .then( () => console.log('User Info tossed to server.js'))
    .catch(error => {
      console.error(error);
    });

    event.preventDefault();

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (

    <Container component="main" maxWidth="xs">
      <div >
        <h1 style={stylePage.styleHead} variant="h5">
        Welcome ☕️
        </h1>
        <p> </p>

        <form onSubmit={this.onSubmit}>

          <Grid container spacing={2}>
            <Grid paddingTop="30%" item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.onChange}
                value={email}
              />
            </Grid>
            <Grid padding="50%" item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.onChange}
                value={password}
              />
            </Grid>
          </Grid>
          <Button
            style={stylePage.styleButton}
            type="submit"
            variant="contained"
            color="primary"
            disabled={isInvalid}
            >
            Sign In
          </Button>
          {error && <p>{error.message}</p>}

          <Grid container justify="center">
            <Grid item>
              <Link to exact href={ROUTES.PASSWORD_FORGET} label="Forgot Password" variant="body3">
                Click here to reset password.
              </Link>
            </Grid>
          </Grid>

        </form>
      
      </div>
    </Container>
    )
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm }