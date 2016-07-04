var express = require('express');
var router = express.Router();
var daouser = require('../dao/user.dao.js');
var jwt = require('jsonwebtoken');

router.post('/', function(req, res) {
  if (!req.query.uid || !req.query.password) {
    res.status(401).send({
      success: false,
      message: 'Wrong credentials',
    });
    return;
  }

  daouser.getUserByUid(req.query.uid, function(err, user) {
    console.log(res);
    if (user && user.password === req.query.password) {
      // create a token
      var token = jwt.sign(user, req.app.get('superSecret'));

      // return the information including token as JSON
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token,
      });
    } else {
      res.status(401).send({
        success: false,
        message: 'Wrong credentials',
      });
    }
  });

});

module.exports = router;
