import React from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

//testing to see if table can properly get data
function dataSource(name, origin, roaster, brewMethod, coffeeAmount, grindSize, time, water, temperature, rating, steps) {
  return {name, origin, roaster, brewMethod, coffeeAmount, grindSize, time, water, temperature, rating, steps};
}

//defining rows for data sources
let rows = [
  dataSource('Good Coffee', 'Peru', 'Driftaway Roasters', 'Aeropress', '17g', 'fine', '2 minutes', '300g', '88C', '100', '    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
  dataSource('Starbucks', 'El Salvador', 'Dunkin', 'French Press', '28g', 'coarse', '8 minutes', '600g', '108C', '56', 'stir')
]

// defining style elements

const styleTable = {
  fontWeight: "bold"
}

export default function CoffeePage() {

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
      {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.origin}</TableCell>
              <TableCell >{row.roaster}</TableCell>
              <TableCell >{row.brewMethod}</TableCell>
              <TableCell >{row.coffeeAmount}</TableCell>
              <TableCell >{row.grindSize}</TableCell>
              <TableCell >{row.water}</TableCell>
              <TableCell >{row.temperature}</TableCell>
              <TableCell >{row.time}</TableCell>
              <TableCell >{row.rating}</TableCell>
              <TableCell >{row.steps}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </TableContainer>
  );
}