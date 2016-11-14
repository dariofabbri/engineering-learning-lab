var parser = require('./parser');

// Good case.
//
console.log('1');
parser.parse('data.csv').then(
	function(result) {
		console.log(result);
	},
	function(err) {
		console.error(err);
	});

// Bad case.
//
console.log('2');
parser.parse('sdata.csv').then(
	function(result) {
		console.log(result);
	},
	function(err) {
		console.error(err);
	});
console.log('3');
