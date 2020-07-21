var express = require("express");
var app = new express();
var port = 3000;

app.set('views', './template_engines/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    response.send("hello coder X");
});

app.get('/todo', function(req, res) {
    res.render('index', {
        doItem: 'Di ngu'
    });
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
})