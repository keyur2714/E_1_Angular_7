var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mongodemo";

function getDbClient() {
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongodemo");
    return dbo;    
  });
}

module.exports = {
  getDbClient : getDbClient
};
