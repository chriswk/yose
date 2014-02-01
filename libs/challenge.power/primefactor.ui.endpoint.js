var singleObject = require('./primefactor.decompose');

var primeFactorsUi = function(req, res) {
	res.render('primeFactors', resultObject(req));
}

function resultObject(req) {
	var obj = {};
	var number = req.query.number || req.body.number;
	if (!number) {
		return "";
	} else if (Array.isArray(number)) {
		obj.hasMultiple = true
		obj.results = number.map(function (ele) {
			return singleObject(ele, true)
		}).map(function (ele) {
			return extractString(ele);
		});
	} else {
		obj.results = number.split(",").map(function (ele) {
			return singleObject(ele, true);
		}).map(function (ele) {
			return extractString(ele);
		});
		if (obj.results.length > 1) {
			obj.hasMultiple = true;
		}
	}
	return obj; 
}

function extractString(obj) {
	return obj.error ? obj.error : obj.number + " = " + obj.decomposition.join(" x ");
}


module.exports = primeFactorsUi;