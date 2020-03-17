import React from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';

const stylePage = {
  styleHead : {
      marginLeft: "30%",
      fontFamily: "Verdana",
      fontWeight: "bold",
      // paddingBottom: "5%",
      // paddingTop: "5%"
  }
}

export default function PasswordForget() {
  return (
    <Container style={stylePage.styleHead} component="main" maxWidth="xs">
        <h1 maxWidth="m" variant="h1" align="center">
        Forgot Password? 
        </h1>
        <p> </p>
          <Grid >
            <Grid item xs={12}>
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