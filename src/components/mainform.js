import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },


  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
}));

export default function MainForm() {
  
  // constructor(props, context) {
    //   super(props, context);
    //   this.state = {
      //     coffeeName: [],
      //     origin: "",
      //     roaster: "",
      //     brewMethod:"",
      //     grindSize:"",
      //     time:"",
      //     water:"",
      //     temperature:"",
      //     steps:""
      //   };
      // }
      
      // onSave(e) {
        //   // e.preventDefault();
        //   const coffee = {
          //     coffeeName: this.state.coffeeName,
          //   }
          //   axios.post('http://localhost:9000/account', coffee)
          //   .then(res => console.log(res.data));
          // }
          
          // componentDidMount() {
            //   this.onSave();
            // }
            
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
        </Avatar> */}
        <Typography component="h1" variant="h5">
        Create a New Brew
        </Typography>
        <p> </p>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="coffeeName"
                variant="outlined"
                required
                fullWidth
                id="coffeeName"
                label="Coffee"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="origin"
                label="Coffee Origin"
                name="origin"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="roaster"
                label="Roaster"
                name="roaster"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="brewmethod"
                label="Brew Method"
                id="brewmethod"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="grindsize"
                label="Grind Size"
                id="grindsize"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="wateramount"
                label="Water Amount"
                id="wateramount"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="temperature"
                label="Temperature"
                id="temperature"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="steps"
                label="Detailed Steps"
                id="steps"
              />
            </Grid>
          </Grid>
          <Button
            type="save"
            // fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Save
          </Button>
          <Grid container justify="center">
            <Grid item>
              {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
      </div>
    </Container>
  );

}