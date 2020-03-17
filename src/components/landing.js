import React from 'react';
import { withFirebase } from './Firebase';
import * as firebase from 'firebase';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

    }

    onTest() {
        console.log("Testing button");

        console.log(firebase.auth().currentUser.email);
    }

    render() {
        return(
            <div>
                Landing
                <button type="button" onClick={this.onTest}>TEST</button>
            </div>
        )
    }
}

export default withFirebase(LandingPage);