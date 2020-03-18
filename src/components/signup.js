import React from 'react';
import { Typography, Container, Grid, TextField, Button } from '@material-ui/core';

import { withFirebase } from './Firebase';
import { withRouter, Link } from 'react-router-dom';
// import * as firebase from 'firebase';

import * as ROUTES from '../routes/routes';
import axios from 'axios';

const stylePage = {
  styleHead : {
      marginLeft: "32%",
      fontFamily: "Verdana",
      fontWeight: "bold",
  },
  styleButton: {
    marginTop: "5%",
    marginBottom: "5%",
    align: "center"
  }
}

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  error: null,
};

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE};
  }

  onSubmit = event => {
    const info = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    const {
      email,
      password
    } = this.state;

    //add user to Firebase Auth
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, password)
    .then(authUser => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push(ROUTES.HOME);
    })
    .catch(error => {
      this.setState({ error });
    });

    //save info to SQL
    axios
    .post('http://localhost:9000/signup', { info })
    .then( () => console.log('User Info inserted to DB'))
    .catch(error => {
      console.error(error);
    });

    event.preventDefault();

  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      error,
    } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <Typography style={stylePage.styleHead} component="h1" variant="h5">
        Join Unbrew ☕️
        </Typography>
        <p> </p>

        <form onSubmit={this.onSubmit}>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={this.onChange}
                value={firstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={this.onChange}
                autoComplete="lname"
                value={lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={this.onChange}
                autoComplete="email"
                value={email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            fullWidth
            color="primary">
            Sign Up
          </Button>
          {error && <p>{error.message}</p>}

          <Grid container justify="center">
            <Grid item>
              <Link to exact href={ROUTES.SIGN_IN} label="Sign In" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        
        </form>
      </Container>

    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm };