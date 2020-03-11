import React, { Component } from 'react'
import MaterialTable from 'material-table'

class CoffeePage extends Component {
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Coffee Name', field: 'name' },
            { title: 'Origin', field: 'origin' },
            // { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            // { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
          data={[{ name: 'Peet\'s', origin: 'Peru', birthYear: 1987, birthCity: 63 }, {name: 'George Howell', origin: 'Colombia'}]}
          title="The Brews"
        />
      </div>
    )
  }
}

// ReactDOM.render(<CoffeePage />, document.getElementById('react-div'));


export default CoffeePage;

/*
Source: https://reactjsexample.com/a-simple-and-powerful-datatable-for-react/ */

/* steps remaining:
1. fix icon issue
2. need to use a get request to pull data in from db
3. test
*/

