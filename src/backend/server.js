const express = require('express');

const mysql = require('mysql');

const PORT  = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'unbrew'
});

connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
});

require('../routes/routes')(app, connection);

app.listen(PORT, () => {
    console.log('App running on port '+PORT+'');
});