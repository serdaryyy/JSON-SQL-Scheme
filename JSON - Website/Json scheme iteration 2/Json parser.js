// var fs = require('fs');
// var file = __dirname + '/words.json';
//
// fs.readFile(file, 'utf8', function (err, data) {
//     if (err) {
//         console.log('Error: ' + err);
//         return;
//     }
//
//     data = JSON.parse(data);
//
//     console.dir(data);
// });

ticketObj = {
    "firstName": "Menno",
    "lastName": "Franzen",
    "flightdate": "01010101",
    "from": "USA",
    "to": "NLD",
    "class": "business"
}

for (x in ticketObj) {
    console.log(ticketObj.Firstname)
}

var jsonSql = 'INSERT into flight (voornaam, achternaam, datum, dcountry, acountry, class) VALUES ("' + ticketObj.firstName +  '", "' + ticketObj.lastName+  '", "' + ticketObj.flightdate +  '", "'+ ticketObj.from +  '", "'+ ticketObj.to +  '", "'+ ticketObj.class +  '");'
    console.log(jsonSql)

var sql = 'INSERT into flight (voornaam, achternaam, datum, dcountry, acountry, class) VALUES ("Menno", "Franzen", "0101011", "NLD", "USA", "economy");'
    console.log(sql)