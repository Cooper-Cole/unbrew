import React from 'react';
import * as ROUTES from '../routes/routes';
import { Tab, Tabs, Paper } from '@material-ui/core';

class Navigation extends React.Component {
    render() {
        const styleNav = {
            backgroundColor: "#0000",
		        textDecoration: "none",
		        fontWeight: "bold",
		        textColor: "#069",
        };
        return(
        <div className={styleNav}>
          <Paper>
          <Tabs
            indicatorColor="secondary"
            textColor="dark"
            fontWeight="bold"
            centered
            variant="fullWidth"
            backgroundColor= "#f3f5f7"
          >
            <Tab Link exact href={ROUTES.HOME} label="Home" />
            <Tab Link exact href={ROUTES.ACCOUNT} label="Account" />
            <Tab Link exact href={ROUTES.SIGN_IN} label="Sign In" />
            <Tab Link exact href={ROUTES.SIGN_UP} label="Sign Up" />
            <Tab Link exact href={ROUTES.PASSWORD_FORGET} label="Forgot Password" />
          </Tabs>
          </Paper>
          </div>
        );
    }
}
  
  export default Navigation;