var express = require('express'),
	server = express();


server.use(express.bodyParser());


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

server.get("/minesweeper", function(request, response) {
	require('./challenge.minesweeper/minesweeper.endpoint')(request, response);
})
module.exports = server;
