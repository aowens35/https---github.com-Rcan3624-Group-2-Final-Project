var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    console.log("connection!");
    var sql = "CREATE TABLE students (name VARCHAR(25), address VARCHAR(255))";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("Table created");
    });
})