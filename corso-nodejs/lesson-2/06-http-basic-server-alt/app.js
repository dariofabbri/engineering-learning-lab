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
});

// The server is activated and set to listen on port 3000.
//
server.listen(3000);
