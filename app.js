var server  = require('./libs/server'),
    cons = require('consolidate');
	
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
server.enable('view cache');
server.engine('html', cons.hogan);

var port = process.env.PORT || 7000
server.listen(port);
console.log("Listening on port: " +port);
