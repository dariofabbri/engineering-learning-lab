var http = require('http');

// Here we just create the HTTP server. The function passed as
// parameter is called whenever an incoming request needs to be 
// processed (event emitted).
//
var server = http.createServer(function(request, response) {
});

// The server is activated and set to listen on port 3000.
//
server.listen(3000);
