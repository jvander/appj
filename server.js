var express = require('express');
var bodyParser = require('body-parser');
var config = require('./configServer');
var app = express();
var http = require('http').Server(app);


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + config.clientPath));

var api = require('./service/routers')(app,express);
app.use('/api', api);


app.get("*", function(req,res){
    res.sendFile(__dirname + config.viewPath);
});



http.listen(config.port, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Listening on port " + config.port);
    }
});