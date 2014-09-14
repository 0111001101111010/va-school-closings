var _ = require('lodash');
var ms = require('mongoskin');

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost:27017/schools';
var db = ms.db(mongoUri);
var data = require('../data/schools.json');


/*
Location Object:
@param school - school object with params; UNIQUE
@param status - 0-2 |Closed|Delayed|Open
@param text - email  list
@param email - text list
*/

var School = function (school) {
  return {
    "place": school,
    "status": 2,
    "phone": [],
    "email": []
  };
};

db.collection('schools').ensureIndex({"place": 1}, {unique: true},function(err) {
    if (err){
      console.log(err);
    }
});
// add each school once
_.each(data, function (school){
  //create school
  var place = new School(school);
  db.collection('schools').insert(place, function(err, result) {
        if (err) {
          throw err;
        }
        if (result) {
          console.log(place);
        }
      });
});
