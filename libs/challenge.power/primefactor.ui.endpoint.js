var singleObject = require('./primefactor.decompose');

var primeFactorsUi = function(req, res) {
	var result = singleObject(req.query.number);	
	res.render('primeFactors', {decomposition: resultString(result)});
}

function resultString(result) {
	if (result.number) {
		return result.error ? result.error : result.number +" = " +result.decomposition.join(" x ");
	} else {
		return "";
	}
}


module.exports = primeFactorsUi;