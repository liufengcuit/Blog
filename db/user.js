const mysql = require('mysql');
const config = require('./config.js');


exports.User = {
    find: (obj={}, call) => {
        const connection = mysql.createConnection(config.config);
        connection.connect();
        connection.query('select * from user where user="'+obj.user+'" and password="' + obj.password +'"', (err, rows, fields) => {
            console.log(rows);
            if(err) {
                throw err;
            }
            if(rows.length>0) {
                call(true)
            } else {
                call(false);
            }
        })
        connection.end();
    }
}