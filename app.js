var express = require ("express");
var bodyParser = require("body-parser");
var csv = require("ya-csv");

var app = express();

app.use(express.static(__dirname + '/static'));
app.use (bodyParser.urlencoded ({extended: true}));

app.get('/hello', function (request, response) {
    response.send("Hello from the other side!");
});

app.post('/signup', function(request, response){
    var kiesha_name = request.body.visitorName;
    var kiesha_email = request.body.visitorEmail;

    var database = csv.createCsvFileWriter("signups.csv", {flags: "a"});
    var data = [kiesha_name, kiesha_email];
    database.writeRecord(data);
    
    database.writeStream.end();
    
    response.send(kiesha_name);
});


app.listen((process.env.PORT || 8000), function () {
    console.log('What is the meaning of life?' + (process.env.PORT || 8000));
});