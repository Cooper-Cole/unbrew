import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountInfo: []
        };
    }

    callAPI() {
        fetch("http://localhost:9000/account")
        .then(res => res.json())
        .then(accountInfo => this.setState({ accountInfo }))
        .catch(error => error);
    }

    componentDidMount() {
        this.callAPI();
    }

    save() {
        console.log("SAVE BUTTON ONCLICK");
    }

    render() {
        console.log(this.state.accountInfo);
        return(

            <React.Fragment>
                <h1>Account</h1>
                <ul>
                {this.state.accountInfo.map(info => 
                    <li>
                        <p>Username: {info.email}</p>
                        <p>Password: {info.password}</p>
                    </li>)}
                </ul>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="coffeeName"
                        name="coffeeName"
                        label="Coffee Name"
                        fullWidth
                        autoComplete="cofname"
                    />
                    </Grid>
                    <Button variant="contained" color="secondary" onClick={this.save} >
                    Save
                    </Button>
                </Grid>
            </React.Fragment>
        );
    }
};

// export default AccountPage;