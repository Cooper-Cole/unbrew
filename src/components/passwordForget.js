import React from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';

const stylePage = {
  styleHead : {
      marginLeft: "30%",
      fontFamily: "Verdana",
      fontWeight: "bold",
  }
}

export default function PasswordForget() {
  return (
    <Container style={stylePage.styleHead} component="main" maxWidth="xs">
        <h2 maxWidth="m" variant="h1" align="center">
        Forgot Password? 
        </h2>
        <p> </p>
          <Grid >
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
          <p></p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Submit
          </Button>
    </Container>
  );
}