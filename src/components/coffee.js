import React from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';


let customStyles = ({

})

function dataSource(name, origin, roaster, time, grindSize, temp, water, brewMethod, detailedSteps) {
  return {name, origin, roaster, time, grindSize, temp, water, brewMethod, detailedSteps};
}

let rows = [
  dataSource('Good Coffee', 'Peru', 'Peet\'s', '2 minutes', 'fine', 90, '100g', 'AeroPress', 'press really hard'),
  dataSource('Great Coffee', 'Colombia', 'George Howell', '8 minutes', 'medium coarse', 200, '450g', 'French Press', 'do this and that')
]

export default function CoffeePage() {
  //call styles if needed

  return(
    <TableContainer>
      <TableHead>
        <TableRow>
          <TableCell> Coffee Name </TableCell>
          <TableCell >Origin</TableCell>
          <TableCell >Roaster</TableCell>
          <TableCell >Brew Method</TableCell>
          <TableCell >Grind Size</TableCell>
          <TableCell >Water Amount</TableCell>
          <TableCell >Temperature</TableCell>
          <TableCell >Time</TableCell>
          <TableCell >Detailed Steps</TableCell>
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