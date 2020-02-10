// const mysql = require('mysql');

// import Connection from '../backend/server';

const Connection = require('../backend/server');
const con = new Connection();

//console.log(con.test());
console.log(con.query("INSERT INTO user (email, password) VALUES ('junj@wit.edu', 'password')")); 
/* console.log(
    con.query("SELECT * FROM user");
)
*/
// whatever queries