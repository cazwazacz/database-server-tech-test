const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'someSecret',
  resave: false,
  saveUninitialized: true
}))

app.get('/set', function(req, res) {
  req.session.wazap = 'wazap';
  res.sendStatus(200);
})

app.get('/get', function(req, res) {
  res.send(req.session.wazap);
})

module.exports = app;
