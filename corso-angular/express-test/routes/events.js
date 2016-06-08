var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res) {
	
	var collection = db.get().collection('events');
	collection.find().toArray(function (err, docs) {
		res.json(docs);
	});
});

router.get('/:id', function(req, res) {

	var collection = db.get().collection('events');
	collection.findOne(
		{id: parseInt(req.params.id)},
		{fields: {_id: 0}},
		function (err, item) {
			if (item) {
				res.json(item);
			} else {
				res.status(404).json({error: 'Event not found.'});
			}
		} 
	);
});

router.post('/', function(req, res) {

	var collection = db.get().collection('events');
	collection.insertOne(req.body, function (err, doc) {
		res.json(doc);
	});
});

router.put('/:id', function(req, res) {
	res.send('Event updated');
});

router.delete('/:id', function(req, res) {

	var collection = db.get().collection('events');
	collection.findOneAndDelete({id: parseInt(req.params.id)}).then(function (item) {
		if(item) {
			res.json(item.value);
		} else {
			res.status(404).json({error: 'Event not found.'});
		}
	});
});

module.exports = router;
