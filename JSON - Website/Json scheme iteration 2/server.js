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

app.get('/add/:word/:score?', addWord);


function addWord(request, response) {
    var data = request.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;

    if (!score){
        reply = {
            msg: "Score required."
        }
        response.send(reply);

    } else {
    words[word] = score;
    //Hier maak je het een string om het weer op te slaan in FS
    var data = JSON.stringify(words, null, 2);// null, 2 = 2 spaties in FS
    //File, words in file, Callback
    fs.writeFile('words.json', data, finished);

    function finished(err) {
        console.log('all set.');
        reply = {
            word: word,
            score: score,
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

app.get('/search/:word/', searchWord);

function searchWord(request, response) {
    var word = request.params.word;
    var reply;

    if (words[word]) {
        reply = {
            status: "found",
            word: word,
            score: words[word]
        }
    } else {
        reply = {
            status: "not found",
            word: word
        }
    }
    response.send(reply);
}