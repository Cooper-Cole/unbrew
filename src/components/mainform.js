import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from 'axios';



// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },


  
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(2, 0, 1),
//   },
// }));

export default class MainForm extends React.Component {
  
  constructor(props, context) {
      super(props, context);
      this.state = {
          coffeeName: [],
          origin: "",
          roaster: "",
          brewMethod:"",
          grindSize:"",
          time:"",
          water:"",
          temperature:"",
          steps:""
        };
      }

    onSave = e => {
      e.preventDefault();
      
      const info = {
        coffeeName: this.state.coffeeName,
        origin: this.state.origin,
        roaster: this.state.roaster,
        brewMethod: this.state.brewMethod,
        grindSize: this.state.grindSize,
        time: this.state.time,
        water: this.state.water,
        temperature: this.state.temperature,
        steps: this.state.steps
      };

      axios
      .post('http://localhost:9000/home', { info })
      .then( () => console.log('Information inserted to DB'))
      .catch(err => {
        console.error(err);
      });
    }

    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
      
  //     onSave(e) {
  //         // e.preventDefault();
  //         const coffee = {
  //             coffeeName: this.state.coffeeName,
  //           }
  //           axios.post('http://localhost:9000/account', coffee)
  //           .then(res => console.log(res.data));
  //         }
          
  //         componentDidMount() {
  //             this.onSave();
  //           }
            
  render() {
    
    // const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      {/* <div className={classes.paper}> */}
        {/* <Avatar className={classes.avatar}>
        </Avatar> */}
        <Typography component="h1" variant="h5">
        Create a New Brew
        </Typography>
        <p> </p>

          <form onSubmit={this.onSave}>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="coffeeName"
                variant="outlined"
                required
                fullWidth
                id="coffeeName"
                label="Coffee"
                onChange={this.handleInputChange}
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
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="roaster"
                label="Roaster"
                name="roaster"
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="brewMethod"
                label="Brew Method"
                id="brewMethod"
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="grindSize"
                label="Grind Size"
                id="grindSize"
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="time"
                label="Time"
                id="time"
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="water"
                label="Water Amount"
                id="water"
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="temperature"
                label="Temperature"
                id="temperature"
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="steps"
                label="Detailed Steps"
                id="steps"
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
          </Grid>
          <Button size="lg" block
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            // onClick={(e) => { this.onSave(e)}}
            >
            Save
          </Button>

          </form>

          <Grid container justify="center">
            <Grid item>
              {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
      {/* </div> */}
    </Container>
  );
}       
}