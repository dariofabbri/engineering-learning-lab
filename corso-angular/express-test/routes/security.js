var express = require('express');
var jwt = require('jsonwebtoken');


/*
AUTHORIZZATION
 */
var jwtChecker = express.Router();
jwtChecker.use(function(req, res, next) {
  console.log(req.method);
  if(req.method==='OPTIONS'){ next();return;}
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

  if (token) {
    console.log('token:');
    console.log(token);
    jwt.verify(token, req.app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.',
        });
      } else {
        req.user = decoded;
        next();
      }
    });

  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.',
    });

  }
});

var adminChecker = express.Router();
adminChecker.use(function(req, res, next) {
  if(req.method==='OPTIONS'){ next();return;}
  var user = req.user;

  if (user && user.isAdmin) {
    next();

  } else {
    return res.status(403).send({
      success: false,
      message: 'You aren\'t Administrator.',
    });
  }


});


exports.adminChecker = adminChecker;
exports.jwtChecker = jwtChecker;
