import React from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';


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

export default function SignUpPage() {
  return (
    <Container component="main" maxWidth="sm">
        <h2 style={stylePage.styleHead} component="h1" variant="h5">
        Join Unbrew ☕️
        </h2>
        <p> </p>
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
                autoComplete="lname"
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
                autoComplete="email"
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
    </Container>
  );
}