import React from 'react';

import { FirebaseContext } from './Firebase';

const LandingPage = () => (
    <div>
        <h1>Landing</h1>
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    error: null,
};

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE};
    }

    onSubmit = event => {
        const { firstname, lastname, email, password } = this.state;

        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
            this.setState({ ...INITIAL_STATE });
        })
        .catch(error => {
            this.setState({ error });
        });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const {
            firstname,
            lastname,
            email,
            password,
            error,
        } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <input
                name="firstname"
                value={firstname}
                onChange={this.onChange}
                type="text"
                placeholder="First Name"
                />
                <input
                name="lastname"
                value={lastname}
                onChange={this.onChange}
                type="text"
                placeholder="Last Name"
                />
                <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email"
                />
                <input
                name="password"
                value={password}
                onChange={this.onChange}
                type="text"
                placeholder="Password"
                />

                <button type="submit">Sign Up</button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default LandingPage;