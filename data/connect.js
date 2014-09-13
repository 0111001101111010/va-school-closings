//Database

(function () {
  var ms = require('mongoskin');
  var mongoUri = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost:27017/closings';
  var db = ms.db(mongoUri);
  var data = require('./schools.json');
}());
