import React from 'react';
import * as ROUTES from '../routes/routes';
import { Tab, Tabs, Paper } from '@material-ui/core';

<<<<<<< HEAD
import SignOutButton from './signout';
// import { Link } from 'react-router-dom';

const Navigation = ({ authUser }) => (
<div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <Paper>
    <Tabs
    indicatorColor="secondary"
    textColor="dark"
    fontWeight="bold"
    centered
    variant="fullwidth"
    backgroundColor="#f3f5f7"
    >
      <Tab Link exact href={ROUTES.LANDING} label="Landing" />
      <Tab Link exact href={ROUTES.HOME} label="Home" />
      <Tab Link exact href={ROUTES.ACCOUNT} label="Account" />
      <SignOutButton />
    </Tabs>

  </Paper>
);

const NavigationNonAuth = () => (
  <Paper>
    <Tabs
    indicatorColor="secondary"
    textColor="dark"
    fontWeight="bold"
    centered
    variant="fullwidth"
    backgroundColor="#f3f5f7"
    >
      <Tab Link exact href={ROUTES.LANDING} label="Landing" />
      <Tab Link exact href={ROUTES.SIGN_IN} label="Signin" />
      <Tab Link exact href={ROUTES.SIGN_UP} label="Signup" />
    </Tabs>
  </Paper>
);

// class Navigation extends React.Component {
//     render() {
//         const styleNav = {
//             backgroundColor: "#0000",
// 		        textDecoration: "none",
// 		        fontWeight: "bold",
// 		        textColor: "#069",
//         };
//         return(
//         <div className={styleNav}>
//           
//         </div>
//         );
//     }
// }
=======
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
>>>>>>> 39808df82bf1109e71faf857d6add2df438d9383
  
export default Navigation;