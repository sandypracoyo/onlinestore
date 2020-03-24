var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customerRouter = require('./routes/v1/customer');
var driverRouter = require('./routes/v1/driver');
var productRouter = require('./routes/v1/product');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//endpoint default
app.use('/', indexRouter);
app.use('/users', usersRouter);

//endpoint
app.use('/api/v1', customerRouter);
app.use('/api/v1', driverRouter);
app.use('/api/v1', productRouter);

module.exports = app;
