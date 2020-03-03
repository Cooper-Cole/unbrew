const express = require('express');
const logger = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./dbConfig');
// const connection = require('./connection');
// const query = require('./query');

const pool = mysql.createPool(dbConfig);

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(express.urlencoded({ extended: false }));

const info_columns = 'user_email, coffee_name, origin, roaster, brew, grind, time, water_amount, temperature, steps';

// May need a function to connect + query to increase efficiency
// function connect(sql, values) {
//     pool.getConnection(function (err, connection) {
//         connection.query(sql, [values], function(err, rows) {
//             connection.release();
//             res.send(JSON.stringify(rows));
//         });
//     })
// }

// Get data from MySQL, change SQL statement accordingly.
function fetch(req, res, sql) {
    pool.getConnection(function (err, connection) {
        //async await may be needed but using pool is fine for now.
        connection.query(sql, function (err, rows) {
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

// Get call to specific URL. i.e. http://localhost:9000/account
// Change the '/account' to corresponding page to prevent redundant data retrieving
app.get('/account', function(req, res) { //change dir for corresponding page
    fetch(req, res, "SELECT * FROM user");
    // add(req.res);
});

// Post call to specific URL. i.e. http://localhost:9000/account
// Change the '/account' to corresponding page to prevent redundant data posting
// Change SQL statement to adjust what you want to do with each page
app.post('/account', function(req, res) {
    
    // console.log(req.body.coffee);
    let sql = "INSERT INTO info ("+info_columns+") VALUES ?";
    let values = [
        // 1st column (email) is the primary key; it won't pass the values to DB unless the email exists.
        ['junj@wit.edu', req.body.coffee, 'korea', '', '', '', '', '', '', ''], 
    ];
    pool.getConnection(function(err, connection) {
        connection.query(sql, [values], function(err, rows) {
            connection.release();
            if (err) throw err;
            console.log(JSON.stringify(rows));
            res.send(JSON.stringify(rows));
        })        
    })
})

app.get('/signin', function(req, res) {
    pool.getConnection(function(err, connection) {

    })
})

app.post('/home', function(req, res) {

    let sql = "INSERT INTO info ("+info_columns+") VALUES ?";
    let values = [
        ['junj@wit.edu',
        req.body.info.coffeeName,
        req.body.info.origin,
        req.body.info.roaster,
        req.body.info.brewMethod,
        req.body.info.grindSize,
        req.body.info.time,
        req.body.info.water,
        req.body.info.temperature,
        req.body.info.steps],
    ];

    pool.getConnection(function(err, connection) {
        connection.query(sql, [values], function(err, rows) {
            connection.release();
            if(err) throw err;
            console.log(JSON.stringify(rows));
            res.send(JSON.stringify(rows));
        })
    })

    // console.log(req.body.info.coffeeName);
})

app.post('/signup', function(req, res) {
    let sql = "INSERT INTO user (email, password) VALUES ?";
    let values = [
        [req.body.info.email,
        req.body.info.password],
    ];

    pool.getConnection(function(err, connection) {
        connection.query(sql, [values], function(err, rows) {
            connection.release();
            if(err) throw err;
            console.log(JSON.stringify(rows));
            res.send(JSON.stringify(rows));
        })
    })

    
})

//using port 9000
//run "node server.js" in this dir first then npm start
app.listen(9000, () => {
    console.log('Go to http://localhost:9000 to see JSON result');
});