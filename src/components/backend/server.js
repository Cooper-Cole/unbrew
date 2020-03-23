const express = require('express');
const logger = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./dbConfig');
// const connection = require('./connection');
// const query = require('./query');
const firebase = require('firebase');

let fb = firebase.initializeApp({
    apiKey: "AIzaSyBaZTDKBe848uL6_g4bkphI6xPSjLD5Lrs",
    authDomain: "unbrew-1cb9b.firebaseapp.com",
    databaseURL: "https://unbrew-1cb9b.firebaseio.com",
    projectId: "unbrew-1cb9b",
    storageBucket: "unbrew-1cb9b.appspot.com",
    messagingSenderId: "380675641256",
    appId: "1:380675641256:web:ea684179eb591229f5579d"
});

const pool = mysql.createPool(dbConfig);

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(express.urlencoded({ extended: false }));

const info_columns = 'user_email, coffee_name, origin, roaster, brew, grind, time, water_amount, temperature, steps, coffee_amount, rating';

let authEmail;

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
    fetch(req, res, "SELECT * FROM user WHERE email='"+authEmail+"'");
    // Changed query to show only authenticated user's email and password
    
    console.log(authEmail);
});

// Post call to specific URL. i.e. http://localhost:9000/account
// Change the '/account' to corresponding page to prevent redundant data posting
// Change SQL statement to adjust what you want to do with each page
app.post('/account', function(req, res) {
    
    // console.log(req.body.coffee);
    let sql = "INSERT INTO info ("+info_columns+") VALUES ?";
    let values = [
        // 1st column (email) is the primary key; it won't pass the values to DB unless the email exists.
        [authEmail, req.body.coffee, 'korea', '', '', '', '', '', '', '', '', ''], 
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

app.post('/signin', function(req, res) {
    authEmail = req.body.info.email;

    pool.getConnection(function(err, connection) {

    })

    console.log(authEmail, "SIGN-IN POST CALL");
})

app.post('/home', function(req, res) {

    let sql = "INSERT INTO info ("+info_columns+") VALUES ?";
    let values = [
        [authEmail,
        req.body.info.coffeeName,
        req.body.info.origin,
        req.body.info.roaster,
        req.body.info.brewMethod,
        req.body.info.grindSize,
        req.body.info.time,
        req.body.info.water,
        req.body.info.temperature,
        req.body.info.steps,
        req.body.info.coffeeAmount,
        req.body.info.rating],
    ];

    pool.getConnection(function(err, connection) {
        connection.query(sql, [values], function(err, rows) {
            connection.release();
            if(err) throw err;
            console.log(JSON.stringify(rows));
            res.send(JSON.stringify(rows));
        })
    })

    console.log(authEmail);
})

app.post('/signup', function(req, res) {
    let sql = "INSERT INTO user (email, password, firstName, lastName) VALUES ?";
    let values = [
        [req.body.info.email,
        req.body.info.password,
        req.body.info.firstName,
        req.body.info.lastName],
    ];

    authEmail = req.body.info.email;

    pool.getConnection(function(err, connection) {
        connection.query(sql, [values], function(err, rows) {
            connection.release();
            if(err) throw err;
            console.log(JSON.stringify(rows));
            res.send(JSON.stringify(rows));
        })
    })

    console.log(authEmail, "THIS IS IN THE SIGNUP POST CALL");
    
})

app.get('/coffee', function(req, res) {
    fetch(req, res, "SELECT * FROM info WHERE user_email='"+authEmail+"'");
        
})

//using port 9000
//run "node server.js" in this dir first then npm start
app.listen(9000, () => {
    console.log('Go to http://localhost:9000 to see JSON result');
});