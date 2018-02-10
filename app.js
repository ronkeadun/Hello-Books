const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require('./server/route');
//const db = require('./db');
const path = require('path');



// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//require('./server/route')(app);
index(app);



// Setup a default catch-all route that sends back a welcome message.
app.get('*', (req, res) => {
	res.status(200).send("message: 'Welcome to Hello-Books.'")
});

module.exports = app;