import React from 'react';
import * as ROUTES from '../routes/routes';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
      <CssBaseline />
      <div >
        <Typography style={stylePage.styleHead} component="h1" variant="h5">
        Join Unbrew ☕️
        </Typography>
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
            // fullWidth
            variant="contained"
            color="primary"
            >
            Sign In
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link to exact href={ROUTES.SIGN_UP} label="Sign In" variant="body2">
                Don't have an account? Sign up!
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}