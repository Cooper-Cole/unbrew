import React from 'react';
import { Nav, Navbar}from 'react-bootstrap';

import * as ROUTES from '../routes/routes';

class Navigation extends React.Component {
    render() {
        const styleNav = {
            width: "100%",
            margin: "0 0 3em 0",
            listStyle: "none",
            backgroundColor: "#0000",
            display: "block",
		    padding: "8px 15px",
		    textDecoration: "none",
		    fontWeight: "bold",
		    color: "#069",
        };
        return(
            <Navbar style={styleNav} bg="light" variant="light">
            <div className="styleNav"> </div>
            <Navbar.Brand> Unbrew </Navbar.Brand>
            <Nav.Item>
              <Nav.Link exact href={ROUTES.HOME}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link exact href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link exact href={ROUTES.ACCOUNT}>Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={ROUTES.SIGN_UP}>Sign Up</Nav.Link>
            </Nav.Item>
        </Navbar>
        );
    }
}
  
  export default Navigation;