const express = require('express');
const morgan = require('morgan');
const path = require('path');

const db = require('./db');
const PORT = 8080;

const app = express();

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '../public')));

// api route
app.use('/api', require('./api'));

// index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err || 'Internal server error.');
});

db.sync().then(() => {
  console.log('DB synced!');
  app.listen(PORT, () => console.log(`You are connected to port ${PORT}`));
});
