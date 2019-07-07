var mysql = require('mysql');

 var conn = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "admin",
   database: "express_demo"
 });

let getConnection = () => {
    return conn;
}

module.exports = {
    getConnection : getConnection
};
