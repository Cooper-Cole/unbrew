import React from 'react';
import { Tab, Tabs, Paper } from '@material-ui/core';

import { withFirebase } from './Firebase';

const SignOutButton = ({ firebase }) => (
    <Tab button type="button" href="/" onClick={firebase.doSignOut} label="Sign Out" />
);

export default withFirebase(SignOutButton);

