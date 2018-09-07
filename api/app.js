const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/${process.env.DATABASE_NAME}`, { useNewUrlParser: true });

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/user', require('./routes/UserRoute'));
module.exports = app;