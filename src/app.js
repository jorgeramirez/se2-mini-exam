global.__base = __dirname;

const express = require('express');
const bodyParser = require('body-parser');

const { stringSquare } = require('./string-square');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// health check (public endpoint)
app.get('/', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

app.get('/square', (req, res) => {
  const sq = stringSquare(req.query.string);
  res.json({ result: sq });
});

module.exports = app;
