import React from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

//testing to see if table can properly get data
function dataSource(name, origin, roaster, time, grindSize, temp, water, brewMethod, detailedSteps) {
  return {name, origin, roaster, time, grindSize, temp, water, brewMethod, detailedSteps};
}

//defining rows for data sources
let rows = [
  dataSource('Good Coffee', 'Peru', 'Peet\'s', '2 minutes', 'fine', 90, '100g', 'AeroPress', 'press really hard'),
  dataSource('Great Coffee', 'Colombia', 'George Howell', '8 minutes', 'medium coarse', 200, '450g', 'French Press', 'do this and that')
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
          <TableCell style={styleTable}> Coffee Name </TableCell>
          <TableCell style={styleTable}>Origin</TableCell>
          <TableCell style={styleTable}>Roaster</TableCell>
          <TableCell style={styleTable}>Brew Method</TableCell>
          <TableCell style={styleTable}>Grind Size</TableCell>
          <TableCell style={styleTable}>Water Amount</TableCell>
          <TableCell style={styleTable}>Temperature</TableCell>
          <TableCell style={styleTable}>Time</TableCell>
          <TableCell style={styleTable}>Detailed Steps</TableCell>
        </TableRow>         
      </TableHead> 
      <TableBody>
      {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.origin}</TableCell>
              <TableCell >{row.roaster}</TableCell>
              <TableCell >{row.brewMethod}</TableCell>
              <TableCell >{row.grindSize}</TableCell>
              <TableCell >{row.water}</TableCell>
              <TableCell >{row.temp}</TableCell>
              <TableCell >{row.time}</TableCell>
              <TableCell >{row.detailedSteps}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </TableContainer>
  );
}