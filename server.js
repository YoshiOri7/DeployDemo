var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/user', function(req, res){
  res.send('user');
});

var server = app.listen(port, function(){
  console.log('Listening to '+port);
});