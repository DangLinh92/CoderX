const express = require('express');
const app = new express();
const port = 3000;
const morgan = require('morgan');
const shortid = require('shortid');

app.use(morgan("short"));
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

app.set('view engine', 'pug');
app.set('views', './views');

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

// Set some defaults
db.defaults({ books: [] })
    .write();

app.get('/', (req, res) => {
    return res.send('Welcome to books admin!');
});

app.get('/books', (req, res) => {
    let books = db.get('books').value();
    return res.render("index", { books: books });
});

app.get('/books/new', (req, res) => {
    return res.render("addBook");
});

app.post('/books/new', (req, res) => {
    let name = req.body.name;
    let description = req.body.des;
    db.get('books')
        .push({ id: shortid.generate(), name: name, description: description })
        .write();
    return res.redirect("/books");
});

app.get('/books/edit/:id', (req, res) => {
    let id = req.params.id;
    let book1 = db.get('books').find({ id: id }).value();
    return res.render("editBook", { book: book1 });
});

app.post('/books/edit', (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
    db.get('books').find({ id: id }).assign({ name: name }).write();
    return res.redirect("/books");
});

app.get('/books/delete/:id', (req, res) => {
    let id = req.params.id;
    db.get('books').remove({ id: id }).write();
    return res.redirect("/books");
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));