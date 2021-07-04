var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.get('/',function(req,res) {
  res.sendFile('index.html');
});

app.get('/images/', function (req, res) {
  res.send('Madhan Wedding')
})

app.get('/js/', function (req, res) {
  res.send('Madhan Wedding')
})

app.get('/css/', function (req, res) {
  res.send('Madhan Wedding')
})