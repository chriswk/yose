var singleObject = require('./primefactor.decompose');

var primeFactorsUi = function(req, res) {
	var result = singleObject(req.query.number);	
	res.render('primeFactors', {decomposition: resultString(result)});
}

function resultString(result) {
	return result.decomposition ? result.number +" = " +result.decomposition.join(" x ") : "";
}


module.exports = primeFactorsUi;