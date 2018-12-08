//Importing FileSystem (FS)
var fs = require('fs');
//Sync = System wacht todat het is uitgevoerd.
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);

console.log('server is starting...');

//npm express install
//Ik wil de npm express gebruiken.
var express = require('express');//Zo import je de statement.

//Een variable maken om express als een app te gebruiken
var app = express();

//Luisten naar binnenkomende data.
var server = app.listen(3000, listening);//localhost:3000

function listening(){
    console.log("listening..");
}

app.use(express.static('website'));


app.get('/json.html/:firstName/:lastName/:from/:to/:dateFlight/:flightClass', addWord);


function addWord(request, response) {
    var data = request.params;
    var firstName = data.firstName;
    var lastName = data.lastName;
    var dateFlight = data.dateFlight;
    var departureAirport = data.departureAirport;
    var from = data.from;
    var to = data.to;
    var flightClass = data.flightClass;
    var reply;
//________________________________________________________________
    var crypto = require('crypto');
    function randomValueHex(len){
        return crypto.randomBytes(Math.ceil(len/2)).
        toString('hex').
        slice(0,len);
    };
    var valueID = randomValueHex(4);
    console.log(valueID);
    //____________________________________________________________

    if (!dateFlight){
        reply = {
            msg: "date required."
        }
        response.send(reply);

    } else {
    words.valueID = valueID;
    words.nameFirst = firstName;
    words.nameLast = lastName;
    words.Flightdate = dateFlight;
    words.airportDeparture = departureAirport;
    words.from = from;
    words.to = to;
    words.classflight = flightClass;

    //Hier maak je het een string om het weer op te slaan in FS
    let data = JSON.stringify(words, null, 2);// null, 2 = 2 spaties in FS
    //File, words in file, Callback
    fs.writeFile('words.json', data, finished);

    function finished(err) {
        console.log('all set.');
        reply = {

            dateFlight: dateFlight,
            //timeFlight: timeFlight,
            departureAirport: departureAirport,
            from: from,
            to: to,
            status: "success"
        }
        response.send(reply);
    }

    }
}

app.get('/all', sendAll);

function sendAll(request, response) {
    response.send(words);
}