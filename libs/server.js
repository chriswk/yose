var express = require('express');

var server = express();


server.get('/', function(request, response) {
	require('./challenge.welcome/welcome.endpoint')(request, response);
});
server.get('/ping', function(request, response){
    require('./challenge.ping/ping.endpoint')(request, response);
});
server.get('/primeFactors', function(request, response) {
	require('./challenge.power/primefactor.endpoint')(request, response);
});

module.exports = server;
