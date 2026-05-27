const mysql = require("mysql2");

require("dotenv").config();

const pool = mysql.createPool({

    host: process.env.MYSQLHOST,

    port: process.env.MYSQLPORT,

    user: process.env.MYSQLUSER,

    password: process.env.MYSQLPASSWORD,

    database: process.env.MYSQLDATABASE,

    waitForConnections: true,

    connectionLimit: 10,

    queueLimit: 0,

    ssl: {
        rejectUnauthorized: false
    }
});

pool.getConnection((err, connection) => {

    if (err) {

        console.log("Database Connection Failed");

        console.log(err);

    } else {

        console.log("MySQL Connected Successfully");

        connection.release();
    }
});

module.exports = pool;