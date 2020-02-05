import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class MainForm extends React.Component {
  
  //potential save function
  // constructor(props){
  //   super(props)
  //   this.onSave = this.onSave.bind(this)
  // }
  // onSave(values) {
  //   this.props.onSaveBrew(values)
      
  // }

  render() {
    return (
      <React.Fragment>
      <Typography variant="h1" gutterBottom>
       Unbrew
      </Typography>
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
        <Grid item xs={12} sm={6}>
          <TextField
            id="origin"
            name="origin"
            label="Origin"
            fullWidth
            autoComplete="ori"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="roaster"
            name="roaster"
            label="Coffee Roaster"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="brewMethod"
            name="brewMethod"
            label="Brew Method"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="grindSize"
            name="grindSize"
            label="Grind Size"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="time" name="time" label="Time" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="water"
            name="water"
            label="Water Amount"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="temperature"
            name="temperature"
            label="Temperature"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          id="standard-textarea"
          label="Steps"
          placeholder="Placeholder"
          multiline
          fullWidth
        />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" color="secondary" onClick={() => { alert("✔️ This works on every component!"); }} >
            Save
        </Button>
        </Grid>
      </Grid>
    </React.Fragment>
    );
  }
}