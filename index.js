var express = require('express');
var request = require('superagent-charset');

var app = express();
var HOST = 'http://main_test.geekpark.net/api/v1';
app.set('port', (process.env.PORT || 5000));

app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get('/', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl).charset('gbk')
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

app.get('/posts/:id', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl).charset('gbk')
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
