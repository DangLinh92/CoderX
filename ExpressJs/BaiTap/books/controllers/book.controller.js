const db = require('../db');
const shortid = require('shortid');

module.exports.get = (req, res) => {
    let books = db.get('books').value();
    return res.render("index", { books: books });
}

module.exports.new = (req, res) => {
    return res.render("addBook");
}

module.exports.postNew = (req, res) => {
    let name = req.body.name;
    let description = req.body.des;
    db.get('books')
        .push({ id: shortid.generate(), name: name, description: description })
        .write();
    return res.redirect("/books");
};

module.exports.edit = (req, res) => {
    let id = req.params.id;
    let book1 = db.get('books').find({ id: id }).value();
    return res.render("editBook", { book: book1 });
}

module.exports.postEdit = (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
    db.get('books').find({ id: id }).assign({ name: name }).write();
    return res.redirect("/books");
}

module.exports.delete = (req, res) => {
    let id = req.params.id;
    db.get('books').remove({ id: id }).write();
    return res.redirect("/books");
}