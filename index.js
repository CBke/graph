var express = require('express');
var sqlite3 = require('sqlite3');
var app = express();

app.use(express.static('files'));

app.get('/data', function (req, res) {
  var db = new sqlite3.Database('db/data.db');

  var table = req.query.table;
  var sql = "SELECT * FROM " + table + " LIMIT 10";

  db.all(sql, function(err, rows) {
       res.send(JSON.stringify(rows));
  });

  db.close();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
