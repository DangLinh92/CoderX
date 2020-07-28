const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const db = require('../db');

router.get('/', (req, res) => {
    let books = db.get('books').value();
    return res.render("index", { books: books });
});

router.get('/new', (req, res) => {
    return res.render("addBook");
});

router.post('/new', (req, res) => {
    let name = req.body.name;
    let description = req.body.des;
    db.get('books')
        .push({ id: shortid.generate(), name: name, description: description })
        .write();
    return res.redirect("/books");
});

router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    let book1 = db.get('books').find({ id: id }).value();
    return res.render("editBook", { book: book1 });
});

router.post('/edit', (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
    db.get('books').find({ id: id }).assign({ name: name }).write();
    return res.redirect("/books");
});

router.get('/delete/:id', (req, res) => {
    let id = req.params.id;
    db.get('books').remove({ id: id }).write();
    return res.redirect("/books");
});

module.exports = router;