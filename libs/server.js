var express = require('express'),
    cons = require('consolidate'),	
    server = express();;

server.set('view engine', 'html');
server.set('views', __dirname + '../views');
server.enable('view cache');
server.use(express.bodyParser());

server.engine('html', cons.hogan);

server.get('/', function(request, response) {
	require('./challenge.welcome/welcome.endpoint')(request, response);
});
server.get('/ping', function(request, response){
    require('./challenge.ping/ping.endpoint')(request, response);
});
server.get('/primeFactors', function(request, response) {
	require('./challenge.power/primefactor.endpoint')(request, response);
});

server.get('/primeFactors/ui', function(request, response) {
	require('./challenge.power/primefactor.ui.endpoint')(request, response);
});

server.post('/primeFactors/ui', function(request, response) {
	require('./challenge.power/primefactor.ui.endpoint')(request, response);
});

module.exports = server;
