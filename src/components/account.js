import React from 'react';
import axios from 'axios';
// import { withFirebase } from './Firebase';
// import * as firebase from 'firebase';

import * as ROUTES from '../routes/routes';
import Link from '@material-ui/core/Link';

import { Container, Button, TextField, Grid } from '@material-ui/core';

export default class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Can be array or simply string to use get/post calls
            accountInfo: [], 
            coffeeName: '',
        };
    }

    // Calling server.js (API)
    callAPI() {
        fetch("http://localhost:9000/account")
        .then(res => res.json())
        .then(accountInfo => this.setState({ accountInfo }))
        .catch(error => error);
    }

    componentDidMount() {
        this.callAPI();
    }

    // Handling value change according to input change; nothing to do with submission except value.
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        const coffee  = this.state.coffeeName;

        // Make it look like a JSON object
        const sendThis = { coffee }

        // Use axios to use Post call
        // Haven't tested Get call with axios yet
        axios
        .post('http://localhost:9000/account', sendThis)
        .then( () => console.log('Coffee Name Passed to Server'))
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        // console.log(this.state.accountInfo);
        const stylePage = {
            styleHead : {
                marginLeft: "32%",
                fontFamily: "Verdana",
                fontWeight: "bold",
                paddingBottom: "1%",
                paddingTop: "1%"
            },
            styleButton: {
              marginTop: "5%",
              // marginLeft: "25%",
              marginBottom: "5%"
            }
          }
        return(
            <Container component="main" maxWidth="xs">
            <div >
              <h2 style={stylePage.styleHead} component="h1" variant="h5">
              Account ☕
              </h2>
              <p> </p>
                <Grid container spacing={2}>
                  <Grid paddingTop="30%" item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label={this.state.accountInfo.map(info => 
                            info.firstName
                            )}
                      name="email"
                      autoComplete="email"
                      onChange={this.handleInputChange}
                    />
                  </Grid>
                  <Grid padding="50%" item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label={this.state.accountInfo.map(info => 
                        info.lastName
                        )}
                      type="password"
                      id="password"
                      onChange={this.handleInputChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  style={stylePage.styleButton}
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  >
                  Save
                </Button>
                <Grid container justify="center">
                </Grid>

                         <Grid container justify="center">
                <Grid item>
                  <Link to exact href={ROUTES.PASSWORD_FORGET} label="Forgot Password" variant="body3">
                    Click here to reset password.
                  </Link>
                </Grid>

                <Grid item>
                  <Link to exact href={ROUTES.PASSWORD_CHANGE} label="Change Password" variant="body3">
                    Click here to change password.
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        );
    }
};

// export default AccountPage;