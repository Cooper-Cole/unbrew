import React from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountInfo: [],
            coffeeName: ''
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

    // save() {
    //     let val = document.getElementById('coffeeName').value;
    //     // console.log(document.getElementById('coffeeName').value);
    //     module.exports = val;
    // }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        const coffee  = this.state.coffeeName;

        const sendThis = { coffee }

        axios
        .post('http://localhost:9000/account', sendThis)
        .then( () => console.log('Coffee Name Passed to Server'))
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        // console.log(this.state.accountInfo);
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
                        <form onSubmit={this.handleSubmit}>
                        <TextField
                        required
                        id="coffeeName"
                        name="coffeeName"
                        label="Coffee Name"
                        fullWidth
                        autoComplete="cofname"
                        onChange={this.handleInputChange}
                        />
                        <Button variant="contained" color="secondary" type="submit" >
                        Save
                        </Button>
                        </form>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
};

// export default AccountPage;