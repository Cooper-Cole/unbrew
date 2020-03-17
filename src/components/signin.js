import React from 'react';
import * as ROUTES from '../routes/routes';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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

export default function SignInPage() {
  return (
    <Container component="main" maxWidth="xs">
      <div >
        <h1 style={stylePage.styleHead} variant="h5">
        Welcome ☕️
        </h1>
        <p> </p>
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
              />
            </Grid>
          </Grid>
          <Button
            style={stylePage.styleButton}
            type="submit"
            variant="contained"
            color="primary"
            >
            Sign In
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link to exact href={ROUTES.PASSWORD_FORGET} label="Forgot Password" variant="body3">
                Click here to reset password.
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}