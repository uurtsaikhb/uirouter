'use strict';

var express = require('express');

var fs = require('fs');

var bodyParser = require('body-parser');

var BASE_PORT = 9090;

var ROOT_DIR = __dirname + '/';
ROOT_DIR = fs.realpathSync(ROOT_DIR);
if (!fs.existsSync(ROOT_DIR)) {
	console.log('Error: cannot find working directory: ' + ROOT_DIR);
	exit();
}

var app = express();

app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

app.use(bodyParser.json());

app.use(express.static(ROOT_DIR));

app.listen(BASE_PORT, function() {
	console.log('Node server started @ http://localhost:' + BASE_PORT);
	console.log('Serving static files from ' + ROOT_DIR);
	console.log('Press Ctrl + c for server termination');
});