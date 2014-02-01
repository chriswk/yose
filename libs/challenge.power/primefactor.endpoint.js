var singleObject = require('./primefactor.decompose');

var primeFactors = function(request, response) {
	if (Array.isArray(request.query.number)) {
		var returnObjects = request.query.number.map(new function(el) {
			return singleObject(el, false);
		});
	} else {
		returnObjects = singleObject(request.query.number, false);
	}
	response.send(returnObjects);
}


module.exports = primeFactors;