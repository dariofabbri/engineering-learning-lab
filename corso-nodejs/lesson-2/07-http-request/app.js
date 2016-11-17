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

	// Let's analyze what is present in the request object, which is
	// an instance of an IncomingMessage object.
	//
	// First, we dump the whole request object (huge).
	//
	console.log(request);

	// Then, just some interesting parts.
	//
	console.log('Method: ' + request.method);
	console.log('URL: ' + request.url);
	console.log('Headers: ', request.headers);
});

// The server is activated and set to listen on port 3000.
//
server.listen(3000);
