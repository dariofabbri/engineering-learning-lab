var fs = require('fs');

fs.readFile('file.txt', (err, data) => {
	if (err) {
		throw err;
	} else {
		debugger;
		console.log(data.toString());
	}
});

console.log('I get printed first!');
