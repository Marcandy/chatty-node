var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

app.listen(3000);
