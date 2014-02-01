var singleObject = require('./primefactor.decompose');

var primeFactorsUi = function(req, res) {
	res.render('primeFactors', {decomposition: resultString(req)});
}

function resultString(req) {
	if (!req.query.number) {
		return "";
	} else if (isNaN(req.query.number)) {
		return req.query.number + " is not a number";
	} else {
		var result = singleObject(req.query.number);
		return result.error ? result.error : result.number +" = " +result.decomposition.join(" x ");
	} 
}


module.exports = primeFactorsUi;