require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.API_PORT;

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', require('./routes/UserRoute'));

app.listen(port);
console.log(`API @ ${port}`);