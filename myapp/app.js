'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const {
  ForwardErrorHandler,
  ErrorHandler
} = require('./errorHandler');
const {
  analyze
} = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/analyze', analyze);

// catch 404 and forward to error handler
app.use(ForwardErrorHandler);
// error handler
app.use(ErrorHandler);

module.exports = app;
