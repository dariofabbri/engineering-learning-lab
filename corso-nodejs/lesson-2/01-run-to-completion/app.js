console.log('1');

setTimeout(function() {

	console.log('2');

	setTimeout(function() {

		console.log('3');

	}, 0);

}, 0);

console.log('4');
