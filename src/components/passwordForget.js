import React from 'react';
import { Button, TextField} from '@material-ui/core';

import { withFirebase } from './Firebase';
import * as ROUTES from '../routes/routes';

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
    .doPasswordReset(email)
    .then( () => {
      this.setState({ ...INITIAL_STATE });
    })
    .catch(error => {
      this.setState({ error });
    });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    const stylePage = {
      styleHead: {
        marginLeft: "30%",
        fontFamily: "Verdana",
        fontWeight: "bold",
      }
    }

    return(
      <form onSubmit={this.onSubmit}>
        <TextField
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Button disabled={isInvalid} type="submit">
          Reset My Password
        </Button>
        {error && <p>{error.message} or is not found</p>}
      </form>
    );
  }
}

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };

// export default function PasswordForget() {
//   return (
//     <Container style={stylePage.styleHead} component="main" maxWidth="xs">
//         <h2 maxWidth="m" variant="h1" align="center">
//         Forgot Password? 
//         </h2>
//         <p> </p>
//           <Grid >
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//           </Grid>
//           <p></p>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             >
//             Submit
//           </Button>
//     </Container>
//   );
// }