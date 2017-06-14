var express = require('express');
var server = express();
var path = require('path');

server.use(express.static(__dirname));
server.use(express.static(__dirname+"/js"));

server.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

server.listen(80);
console.log("Server is running on port 80...");