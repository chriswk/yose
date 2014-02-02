var server  = require('./libs/server'),
    cons = require('consolidate'),
    express = require('express');

server.use(express.logger());
server.use("/public", express.static(__dirname + "/public"));
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
server.enable('view cache');
server.engine('html', cons.hogan);
var port = process.env.PORT || 7000
server.listen(port);
console.log("Listening on port: " +port);
