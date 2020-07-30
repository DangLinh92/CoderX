const shortid = require('shortid');
const db = require('../db');

module.exports.index = (req, res) => {
    let transactions = db.get('transactions').value();
    return res.render('transaction', { transactions: transactions });
}

module.exports.create = (req, res) => {
    let users = db.get('users').value();
    let books = db.get('books').value();

    return res.render('transactionCreate', { users: users, books: books });
}

module.exports.postCreate = (req, res) => {
    let userId = req.body.userId;
    let bookId = req.body.bookId;
    let user = db.get('users').find({ id: userId }).value();
    let book = db.get('books').find({ id: bookId }).value();
    let name = user.name + '--' + book.name;
    db.get('transactions').push({ isComplete: 'false', name: name, userId: userId, bookId: bookId, id: shortid.generate() }).write();
    return res.redirect('/transactions');
}

module.exports.complete = (req, res) => {
    let id = req.params.id;
    let transaction = db.get('transactions').find({ id: id }).assign({ isComplete: 'true' }).write();
    return res.redirect('/transactions');
}