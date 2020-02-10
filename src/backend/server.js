const mysql = require('mysql');

class Connection {
    constructor() {
        this.con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'unbrew'
        });
    }

    test() {
        console.log('CONNECTION');
    }

    connect() {
        this.con.connect(function(err) {
            (err)?console.log(err):console.log('Connected!');
        });
    }

    query(sql) {
        this.con.query(sql, function(err, res) {
            (err)?console.log(err): console.log(res);
        });
    }
}

//using this for now to test in VScode
module.exports = Connection;