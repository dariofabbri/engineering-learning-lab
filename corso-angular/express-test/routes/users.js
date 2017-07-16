var express = require('express');
var router = express.Router();
var db = require('../db');
var userDao = require('../dao/user.dao.js');
var cors = require('cors');

router.get('/', function(req, res) {

  userDao.getAllUsers(function(err, docs) {
    res.json(docs);
  });
});
router.options('/',cors({credentials: true, origin: '*',preflightContinue:true}));

router.get('/:id', function(req, res) {
  userDao.getUserByUid(req.params.id, function(err, docs) {
    if (doc) {
      res.json(doc);
    } else {
      res.status(404).json({
        error: 'User not found.',
      });
    }
  });

});

router.post('/', function(req, res) {
  var user=req.body;
  userDao.getUserByUid(user.uid, function(err, doc) {
    if (doc) {
      res.status(409).json({
        error: 'Event already present.',
      });
    } else {
      userDao.save(user, function(err, doc) {
        if (err) {
          res.status(500).json(err);
        } else {
          delete(req.body._id);
          res.json(req.body);
        }
      });

    }
  });
});

router.put('/:id', function(req, res) {
  if (parseInt(req.params.id) !== req.body.id) {
    res.status(400).json({
      error: 'id in body does not match id in path parameter.',
    });
    return;
  }

  userDao.update(res.body, function(err, doc) {
    if (doc) {
      res.json(doc.value);
    } else {
      res.status(404).json({
        error: 'Event not found.',
      });
    }
  });
});

router.delete('/:id', function(req, res) {
  console.log(req.params.id);
  if(!req.user.isAdmin){
    return res.status(403).send({
      success: false,
      message: 'You aren\'t Administrator.',
    });
  }
  var collection = db.get().collection('users');
  collection.findOneAndDelete({
      uid: req.params.id,
    }, {
      projection: {
        _id: 0,
      },
    },
    function(err, doc) {
      if (doc) {
        res.json(doc.value);
      } else {
        res.status(404).json({
          error: 'Event not found.',
        });
      }
    });
});

module.exports = router;
