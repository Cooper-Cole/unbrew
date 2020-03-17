import React from 'react';
import * as ROUTES from '../routes/routes';
import { Tab, Tabs, Paper } from '@material-ui/core';

class Navigation extends React.Component {
    render() {
        return(
        <div >
          <Paper>
          <Tabs
            textColor="dark"
            centered
            variant="fullWidth"
            backgroundColor= "rgba(0, 0, 0, 0.87)"
          >
            <Tab Link exact href={ROUTES.HOME} label="Home" />
            <Tab Link exact href={ROUTES.ACCOUNT} label="Account" />
            <Tab Link exact href={ROUTES.COFFEE} label="COFFEE" />
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