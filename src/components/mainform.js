import React from 'react';
import axios from 'axios';
import { Select, MenuItem, Container, Grid, TextField, Button} from '@material-ui/core';

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

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
      
            
  render() {

    const stylePage = {
      styleHead: {
        marginLeft: "33%",
        fontFamily: "Verdana",
        fontWeight: "bold",
      },
      styleButton: {
        marginTop: "5%",
        marginLeft: "35%",
        marginBottom: "5%"
      },
    }

  return (
    <Container component="main" maxWidth="s">
        <h1 style={stylePage.styleHead} component="h1" variant="h5">
        Create a New Brew
        </h1>
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
              <Select                 
              onChange = {this.handleChange}
              displayEmpty 
              variant="outlined"
              label="Brew Method"
              fullWidth
              >
                <option hidden>Brew Method</option>
                <MenuItem value="Aeropress">Aeropress</MenuItem>
                <MenuItem value="French Press">French Press</MenuItem>
                <MenuItem value="Chemex">Chemex</MenuItem>
                <MenuItem value="Hario V60">Hario V60</MenuItem>
                <MenuItem value="Kalita Wave">Kalita Wave</MenuItem>
                <MenuItem value="Drip">Drip</MenuItem>
                <MenuItem value="Espresso">Espresso</MenuItem>
        </Select>
             </Grid>
            <Grid item xs={12} sm={6}>
              <Select                 
              onChange = {this.handleChange}
              displayEmpty 
              variant="outlined"
              id="grindSize"
              name="grindSize"
              fullWidth
              >
                <option hidden>Grind Size</option>
                <MenuItem value="Fine">Fine</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Coarse">Coarse</MenuItem>
                <MenuItem value="Espresso">Espresso</MenuItem>
        </Select>
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
                type="number"
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                multiline
                fullWidth
                rows="6"
                name="steps"
                label="Detailed Steps"
                id="steps"
                onChange = {
                  this.handleInputChange
                }
              />
            </Grid>
          </Grid>
          <p></p>
          <Button  size="large"  block
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Save
          </Button>
          </form>
      {/* </div> */}
    </Container>
  );
}       
}