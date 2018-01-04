const express = require('express');
const app = express();

app.get('/set', function(req, res) {
  res.sendStatus(200);
})

module.exports = app;
