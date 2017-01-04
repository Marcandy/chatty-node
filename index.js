var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

var messages = [
  {message: 'hello'},
  {message: 'ma'}
];

app.get('/messages', function (req, res, next) {

  res.status(200).json({messages: messages});
})

app.post('/messages', function (req, res, next) {

  messages.push(req.body.message);// make sure it correspont to the property name
  res.status(200).json({messages: messages});
})

app.listen(3000);
