var express = require('express');
var app = express();
var path = require('path');
var combine = require('./modules/combine');

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/static', express.static(__dirname + '/static'));

app.get('/balance', function(req, res, next){
    res.send(combine.accountBalance());
    res.send(combine.combine());
});

var server = app.listen(process.env.PORT || 3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});

http.createServer(function(request, response){
    response.writeHead(200);
    response.write('Hello world!');
    response.end();
}).listen(process.env.PORT || 3000);