import React from 'react';
import * as ROUTES from '../routes/routes';
import { Tab, Tabs, Paper } from '@material-ui/core';

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
  
export default Navigation;