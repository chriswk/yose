var singleObject = require('./primefactor.decompose');

var primeFactors = function(request, response) {
	if (Array.isArray(request.query.number)) {
		var returnObjects = request.query.number.map(singleObject);
	} else {
		returnObjects = singleObject(request.query.number);
	}
	response.send(returnObjects);
}


module.exports = primeFactors;