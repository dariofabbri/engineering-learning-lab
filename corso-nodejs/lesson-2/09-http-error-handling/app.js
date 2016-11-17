var http = require('http');

// In this variant we just create the HTTP server. 
// The server object is an event emitter, we will had the event listener
// afterwards.
//
var server = http.createServer();

// Installing the event listener. The argument function is called
// any time an incoming request hits the server.
//
server.on('request', function (request, response) {

	var chunks = [];

	// Here an event handler is installed on the 'data' event of
	// the request.
	//
	request.on('data', function (chunk) {
		// For each chunk of data read (that is, for each data event)
		// the chunks are accumulated in an array.
		//
		console.log('Data chunk detected!');
		chunks.push(chunk);
	});

	// An handler for the 'end' event of the request is installed.
	//
	request.on('end', function () {

		// A buffer is created by concatenation of all the chunks,
		// and the it is converted to a string.
		//
		console.log('End of request event reached.');
		body = Buffer.concat(chunks).toString();
		console.log(body);
	});

	// If there is no listener for the error event, in case of a problem
	// the application will crash.
	//
	request.on('error', function () {
		console.error(err);
	});
});

// The server is activated and set to listen on port 3000.
//
server.listen(3000);
