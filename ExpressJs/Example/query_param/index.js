const express = require("express");
const app = new express();
var port = 4000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults
db.defaults({ users: [] })
    .write();

app.set('views', './query_param/views');
app.set('view engine', 'pug');

//let users = [{ name: 'Peter', age: 20 }, { name: 'Jax', age: 22 }];

app.get("/users", function(req, res) {
    res.render("index", { users: db.get('users').value() });
});

app.get('/users/search', function(req, res) {
    var q = req.query.q;
    let usersFilter = db.get('users').value().filter(function(user) {

        if (q) {
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        } else {
            return 1;
        }
    });

    res.render('index', { users: usersFilter });
});

app.get('/users/create', function(req, res) {
    res.render('create');
});

app.post('/users/create', function(req, res) {

    db.get('users')
        .push(req.body)
        .write();
    //users.push(req.body);
    res.redirect('/users');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
})