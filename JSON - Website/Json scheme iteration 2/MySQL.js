ticketObj = {
    "firstName": "Menno",
    "lastName": "Franzen",
    "flightdate": "01010101",
    "from": "fromd",
    "to": "toses",
    "class": "01010"
}

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Kanker123!',
    database: 'Flightinformatin',
});

connection.end();

console.log("connected")

connection.connect(function (err) {
    if (!err) {
        console.log("connected (:");
    } else {
        console.log("error error error error")
    }

    exports.register = function(req,res){
        // console.log("req",req.body);
        var today = new Date();
        var users ={
            "firstname":req.body.first_name,
            "lastname":req.body.last_name,
            "email":req.body.email,
            "password":req.body.password,
            "created":today,
            "modified":today
        }
        connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
            if (error) {
                console.log("error ocurred",error);
                res.send({
                    "code":400,
                    "failed":"error ocurred"
                })
            }else{
                console.log('The solution is: ', results);
                res.send({
                    "code":200,
                    "success":"user registered sucessfully"
                });
            }
        });

    var sql = 'INSERT into flight (voornaam, achternaam, datum, dcountry, acountry, class) VALUES ("' + ticketObj.firstName +  '", "' + ticketObj.lastName+  '", "' + ticketObj.flightdate +  '", "'+ ticketObj.from +  '", "'+ ticketObj.to +  '", "'+ ticketObj.class +  '");'
    var sql_selectall = 'SELECT * FROM flight;'



    connection.query(sql, function (err, result) {
        connection.end()
        if (err) throw err;
        console.log("Json naar SQL Complete");    //     console.log(result)
        })



    connection.query(queries[0], function (err,rows) {
        if (err) {
            console.log(err)
            return;
        }
        rows.forEach(function (result) {
            console.log(result.protocol41)
        })
    })




