import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBaZTDKBe848uL6_g4bkphI6xPSjLD5Lrs",
    authDomain: "unbrew-1cb9b.firebaseapp.com",
    databaseURL: "https://unbrew-1cb9b.firebaseio.com",
    projectId: "unbrew-1cb9b",
    storageBucket: "unbrew-1cb9b.appspot.com",
    messagingSenderId: "380675641256",
    appId: "1:380675641256:web:ea684179eb591229f5579d"
};

export default class Firebase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebaseinfo: [],
        };

        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
    }

    callAPI() {
        fetch("http://localhost:9000/firebase")
        .then(res => res.json())
        .then(firebaseinfo => this.setState({ firebaseinfo }))
        .catch(error => error);
    }

    componentDidMount() {
        this.callAPI();
    }

    //sign up with email & pwd, insert to 'user'
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    //sign in with registered email & pwd, fetch from 'user' to validate
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    
    //just signing out, tell the auth that the user is signed out.
    doSignOut = () => this.auth.signOut();

    //firebase stuff
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    //save updated pwd to 'user'
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    render() {
        return(
            <React.Fragment>
                <ul>

                {this.state.firebaseinfo.map(info =>
                <li>
                <p>apiKey: {info.apiKey}</p>
                <p>authDomain: {info.authDomain}</p>
                <p>databaseURL: {info.databaseURL}</p>
                <p>projectId: {info.projectId}</p>
                <p>storageBucket: {info.storageBucket}</p>
                <p>messagingSenderId: {info.messagingSenderId}</p>
                <p>appId: {info.appId}</p>
                </li>)}
                </ul>

            </React.Fragment>
        );
    }
}