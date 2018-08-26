const express = require('express');
const request = require('superagent');

const app = express();
const HostAPI = 'http://main_test.geekpark.net';
app.set('port', (process.env.PORT || 5000));

app.all('*', ((req, res, next) => {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if (req.method === 'OPTIONS') return res.send(200);
  next();
}));

app.get('/', ((req, res) => {
  res.end('Forbidden');
}));

app.get('/api/v1', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', (() => {
    console.log('v1: ok');
  }));
}));

app.get('/api/v2', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', (() => {
    console.log('v2: ok');
  }));
}));

app.get('/api/v1/posts', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', (() => {
    console.log('v1-posts: ok');
  }));
}));

app.get('/api/v1/posts/:id', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', (() => {
    console.log('v1-posts-id: ok');
  }));
}));

app.get('/api/v1/posts/:id/related', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', (() => {
    console.log('v1-posts-related: ok');
  }));
}));

app.get('/api/v1/posts/hot_in_week', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', (() => {
    console.log('hot_in_week: ok');
  }));
}));

app.get('/api/v1/columns/:id', ((req, res) => {
  let sreq = request.get(HostAPI + req.originalUrl)
  sreq.pipe(res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  sreq.on('end', (() => {
    console.log('columns: ok');
  }));
}));

app.listen(app.get('port'), (() => {
  console.log('Node app is running on http://localhost:'+ app.get('port'));
}));
