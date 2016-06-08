var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var events = require('./routes/events');

var app = express();

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.use('/api/events', events);

// Connect to MongoDB on application startup.
//
db.connect('mongodb://localhost:27017/express-test', function(err) {
	if (err) {
		console.log('Unable to connect to Mongo.')
		process.exit(1)
	} else {
		app.listen(3000, function() {
			console.log('App listening on port 3000!');
		})
	}
});
