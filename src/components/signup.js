import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import * as ROUTES from '../routes/routes';

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

export default function SignUpPage() {
  return (
    <Container component="main" maxWidth="xs">
        <Typography style={stylePage.styleHead} component="h1" variant="h5">
        Join Unbrew ☕️
        </Typography>
        <p> </p>
          <Grid container spacing={2}>
            <Grid item  sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item s={12}>
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
            <Grid item s={12}>
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
            color="primary">
            Sign Up
          </Button>
    </Container>
  );
}