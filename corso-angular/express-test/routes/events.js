var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res) {

  var collection = db.get().collection('events');
  collection.find({}, {
      fields: {
        _id: 0
      }
    })
    .toArray(
      function(err, docs) {
        res.json(docs);
      });
});

router.get('/:id', function(req, res) {

  var collection = db.get().collection('events');
  collection.findOne({
      id: parseInt(req.params.id)
    }, {
      fields: {
        _id: 0
      }
    },
    function(err, doc) {
      if (doc) {
        res.json(doc);
      } else {
        res.status(404).json({
          error: 'Event not found.'
        });
      }
    }
  );
});

router.post('/', function(req, res) {

  var collection = db.get().collection('events');

  collection.findOne({
      id: parseInt(req.body.id)
    },
    function(err, doc) {
      if (doc) {
        res.status(409).json({
          error: 'Event already present.'
        });
      } else {
        collection.insertOne(req.body, function(err, doc) {
          if (err) {
            res.status(500).json(err);
          } else {
            delete(req.body._id);
            res.json(req.body);
          }
        });
      }
    }
  );
});

router.put('/:id', function(req, res) {

  var collection = db.get().collection('events');

  if (parseInt(req.params.id) !== req.body.id) {
    res.status(400).json({
      error: 'id in body does not match id in path parameter.'
    });
    return;
  }

  collection.findOneAndUpdate({
      id: parseInt(req.params.id)
    },
    req.body, {
      projection: {
        _id: 0
      }
    },
    function(err, doc) {
      if (doc) {
        res.json(doc.value);
      } else {
        res.status(404).json({
          error: 'Event not found.'
        });
      }
    });
});

router.delete('/:id', function(req, res) {

  var collection = db.get().collection('events');
  collection.findOneAndDelete({
      id: parseInt(req.params.id)
    }, {
      projection: {
        _id: 0
      }
    },
    function(err, doc) {
      if (doc) {
        res.json(doc.value);
      } else {
        res.status(404).json({
          error: 'Event not found.'
        });
      }
    });
});



module.exports = router;
