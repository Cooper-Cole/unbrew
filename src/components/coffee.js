import React from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

import axios from 'axios';

export default class CoffeePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  callAPI() {
    fetch("http://localhost:9000/coffee")
    .then(res => res.json())
    .then(rows => this.setState({ rows }))
    .catch(error => error);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const styleTable = {
      fontWeight: "bold"
    }

    return(
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell style={styleTable}>Name</TableCell>
            <TableCell style={styleTable}>Origin</TableCell>
            <TableCell style={styleTable}>Roaster</TableCell>
            <TableCell style={styleTable}>Method</TableCell>
            <TableCell style={styleTable}>Coffee Amt.</TableCell>
            <TableCell style={styleTable}>Grind</TableCell>
            <TableCell style={styleTable}>Water Amt.</TableCell>
            <TableCell style={styleTable}>Temp.</TableCell>
            <TableCell style={styleTable}>Time</TableCell>
            <TableCell style={styleTable}>Rating</TableCell>
            <TableCell style={styleTable}>Steps</TableCell>
          </TableRow>         
        </TableHead>
        <TableBody>
          {this.state.rows.map(row =>(
            <TableRow key={row.coffee_name}>
              <TableCell >{row.coffee_name}</TableCell>
              <TableCell >{row.origin}</TableCell>
              <TableCell >{row.roaster}</TableCell>
              <TableCell >{row.brew}</TableCell>
              <TableCell >{row.coffee_amount}</TableCell>
              <TableCell >{row.grind}</TableCell>
              <TableCell >{row.water_amount}</TableCell>
              <TableCell >{row.temperature}</TableCell>
              <TableCell >{row.time}</TableCell>
              <TableCell >{row.rating}</TableCell>
              <TableCell >{row.steps}</TableCell>
            </TableRow>
          ))}
        </TableBody> 
      </TableContainer>
    )
  }
}