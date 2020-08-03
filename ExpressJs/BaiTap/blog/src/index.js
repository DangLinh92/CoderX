const express = require('express');
const morgan = require('morgan');
var handlebars = require('express-handlebars');
const path = require('path');
const app = new express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan("combined"));

// Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource', 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));