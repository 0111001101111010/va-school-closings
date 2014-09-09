var express = require('express');
var router = express.Router();
//var connect = require('../data/connect.js');
//Database


var ms = require('mongoskin');
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost:27017/closings';
var db = ms.db(mongoUri);
var data = require('../data/schools.json');


/*
Location Object:
@param school - school object with params; UNIQUE
@param status - 0-2 |Closed|Delayed|Open
@param text - email  list
@param email - text list
*/

var Location = function (obj) {
  return {
    "school": {},
    "status": 2,
    "phone": [],
    "email": []
  };
};

/* GET users listing. */
router.get('/', function(req, res) {
  db.collection('schools').find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result);

      return res.send(data);
  });
});

module.exports = router;
