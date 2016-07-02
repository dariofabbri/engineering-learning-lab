var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var events = require('./routes/events');
var security = require('./routes/security');
var login = require('./routes/login');
var usersApi = require('./routes/users');

var app = express();

/*
CONFIGURATION
 */
app.set('superSecret', 'Shh!NonDiciamolaANessuno');

/*
ROUTING
 */
app.use(bodyParser.json());
app.use('/static', express.static('static'));

app.use('/login', login);

//api
//----------
app.use('/api', security.jwtChecker);
app.use('/api/events', events);


//admin
//---------
app.use('/api/admin', security.adminChecker);
app.use('/api/admin/events', events);
app.use('/api/admin/users', usersApi);




// Connect to MongoDB on application startup.
//
db.connect('mongodb://localhost:27017/express-test', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    app.listen(3000, function() {
      console.log('App listening on port 3000!');
    });
  }
});
