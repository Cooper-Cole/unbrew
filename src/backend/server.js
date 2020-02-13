const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./dbConfig');
// const connection = require('./connection');
// const query = require('./query');

const pool = mysql.createPool(dbConfig);

const app = express();

app.use(cors());

const info_columns = 'user_email, coffee_name, origin, roaster, brew, grind, time, water_amount, temperature, steps';

function fetch(req, res) {
    pool.getConnection(function (err, connection) {
        //async await may be needed but using pool is fine for now.
        connection.query("SELECT * FROM user", function (err, rows) {
            connection.release(); //Must release
            if (err) throw err;
            console.log(rows.length);
            res.send(JSON.stringify(rows));
        });
        // const conn = await connection(dbConfig).catch(e => {});
        // const results = await query(conn, 'SELECT * FROM user').catch(console.log);
        // res.send(JSON.stringify(results));
    });
}

function add(req, res) {
    let sql = "INSERT INTO info ("+info_columns+") VALUES ?";
    let values = [
        ['junj@wit.edu', 'coffee_name', 'korea', '', '', '', '', '', '', ''],
        // ['jpjun8@gmail.com', 'TWO', 'japan', '', '', '', '', '', '', '']
    ];
    pool.getConnection(function(err, connection) {
        connection.query(sql, [values], function(err, rows) {
            connection.release();
            if (err) throw err;
            console.log(rows.length);
            res.send(JSON.stringify(rows));
        })        
    })
}

app.get('/account', function(req, res) { //change dir for corresponding page
    fetch(req, res);
    // add(req.res);
});

app.get('/signin', function(req, res) {
    pool.getConnection(function(err, connection) {

    })
})

//using port 9000
//run "node server.js" in this dir first then npm start
app.listen(9000, () => {
    console.log('Go to http://localhost:9000 to see JSON result');
});