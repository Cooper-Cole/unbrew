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

export default class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
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
}