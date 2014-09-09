var ms = require('mongoskin');

var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost:27017/closings';
var db = ms.db(mongoUri);
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
