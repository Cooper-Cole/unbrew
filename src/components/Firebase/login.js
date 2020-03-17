import * as React from 'react';
import { render } from 'react-dom';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
    FirebaseAuthProvider,
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseAuthedAnd
} from '@react-firebase/auth';
import firebaseConfig from '../../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

  // const {
  //   user,
  //   signOut,
  //   signInWithGoogle,
  // } = this.props;

let firebase = require('firebase');
let firebaseui = require('firebaseui');

let ui = new firebaseui.auth.AuthUI(firebase.auth());

//sign up with email and password
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(err) {
    let errorCode = err.code;
    let errorMessage = err.message;
});

//sign in with existing users
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(err) {
    let errorCode = err.code;
    let errorMessage = err.message;
});

//track user state
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        //user is signed in
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
    } else {
        //user is signed out
    }
});