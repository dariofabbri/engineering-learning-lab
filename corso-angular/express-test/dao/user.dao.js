var express = require('express');
var db = require('../db');
var tableName = 'users';

exports.getUserByUid = getUserByUid;
exports.getAllUsers = getAllUsers;
exports.save = save;

function save(user, callback) {
  var collection = db.get().collection('users');
  return collection.insertOne(user, callback);
}

function update(user, callback) {
  var collection = db.get().collection('users');
  collection.findOneAndUpdate({
      id: user.uid,
    },
    user, {
      projection: {
        _id: 0,
      },
    }, callback);
}

function getUserByUid(uid, callback) {
  var collection = db.get().collection('users');
  return collection.findOne({
    uid: uid,
  }, {
    fields: {
      _id: 0,
    },
  }, callback);
}

function getAllUsers(callback) {
  var collection = db.get().collection(tableName);
  return collection.find({}, {
    fields: {
      _id: 0,
    },
  }).toArray(callback);
}


function init() {
  var user1 = {
    nome: 'Alessandro',
    cognome: 'Avolio',
    esterno: false,
    uid: 'alessandro.avolio@eng.it',
    isAdmin: true,
    password: "123"
  };
  var user2 = {
    nome: 'Dario',
    cognome: 'Fabbri',
    esterno: false,
    uid: 'dario.fabbri@eng.it',
    isAdmin: true,
    password: "123"
  };

  getUserByUid(user1.uid, function(err, u) {
    if (u) {
      update(user1);
    } else {
      save(user1);
    }
  });
  getUserByUid(user2.uid, function(err, u) {
    if (u) {
      update(user2);
    } else {
      save(user2);

    }
  });


}
setTimeout(function() {
  init();
}, 1000);
