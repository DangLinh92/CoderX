var express = require("express");
var app = new express();
var port = 3000;

app.get('/', function(request, response) {
    response.send("hello coder X");
});

app.get('/todo', function(request, response) {
    var html = '<ul><li>Di cho</li><li>Nau com</li><li>Rua bat</li><li>Hoc coderX</li></ul>';
    response.send(html);
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
})