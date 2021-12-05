require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bearerToken = require('express-bearer-token');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// perform initial configs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// extract token
app.use(bearerToken());

// setup routes
require('./routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
