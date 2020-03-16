import React from 'react';
import * as ROUTES from '../routes/routes';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
    const { email, password } = this.state;
    this.props.firebase
    .doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push(ROUTES.HOME);
    })
    .catch(error => {
      this.setState({ error });
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
      <CssBaseline />
      <div >
        <Typography style={stylePage.styleHead} component="h1" variant="h5">
        Join Unbrew ☕️
        </Typography>
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
              <Link to exact href={ROUTES.SIGN_UP} label="Sign In" variant="body2">
                Don't have an account? Sign up!
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