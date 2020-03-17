import React from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';


import { withFirebase } from './Firebase';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

const stylePage = {
<<<<<<< HEAD
  styleHead: {
    marginLeft: "25%",
    fontFamily: "Verdana",
    fontWeight: "bold",
    paddingBottom: "5%",
    paddingTop: "5%"
=======
  styleHead : {
      marginLeft: "32%",
      fontFamily: "Verdana",
      fontWeight: "bold",
>>>>>>> 39808df82bf1109e71faf857d6add2df438d9383
  },
  styleButton: {
    marginTop: "5%",
    marginBottom: "5%",
    align: "center"
  }
}

<<<<<<< HEAD
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
      firstName,
      lastName,
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
      <CssBaseline />
        {/* <Avatar className={classes.avatar}>
        </Avatar> */}
        <Typography style={stylePage.styleHead} component="h1" variant="h5">
=======
export default function SignUpPage() {
  return (
    <Container component="main" maxWidth="sm">
        <h2 style={stylePage.styleHead} component="h1" variant="h5">
>>>>>>> 39808df82bf1109e71faf857d6add2df438d9383
        Join Unbrew ☕️
        </h2>
        <p> </p>
<<<<<<< HEAD

        <form onSubmit={this.onSubmit}>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
=======
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} >
>>>>>>> 39808df82bf1109e71faf857d6add2df438d9383
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
<<<<<<< HEAD
          {error && <p>{error.message}</p>}

          <Grid container justify="center">
            <Grid item>
              <Link to exact href={ROUTES.SIGN_IN} label="Sign In" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        
        </form>

=======
>>>>>>> 39808df82bf1109e71faf857d6add2df438d9383
    </Container>

    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm };