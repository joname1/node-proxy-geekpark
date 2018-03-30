const express = require('express');
const request = require('superagent');

const app = express();
const HostAPI = 'http://main_test.geekpark.net/api';
app.set('port', (process.env.PORT || 5000));

app.all('*', ((req, res, next) => {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
}));

app.get('/', ((req, res) => {
  res.end('<h1>Forbidden</h1>');
}));

app.get('/v1', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', ((error, res) => {
    console.log('v1: ok');
  }));
}));

app.get('/v2', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', ((error, res) => {
    console.log('v2: ok');
  }));
}));

app.get('/posts/:id', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', ((error, res) => {
    console.log('posts: ok');
  }));
}));

app.listen(app.get('port'), (() => {
  console.log('Node app is running on http://localhost:'+ app.get('port'));
}));
