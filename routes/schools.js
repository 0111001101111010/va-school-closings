var express = require('express');
var router = express.Router();

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

db.collection('scorpion').find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    reply(result);
});

/* GET users listing. */
router.get('/', function(req, res) {

  res.send(data);
});

module.exports = router;
