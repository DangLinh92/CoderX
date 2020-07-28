const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const db = require('../db');

router.get('/', (req, res) => {
    let transactions = db.get('transactions').value();

    return res.render('transaction', { transactions: transactions });
});

router.get('/create', (req, res) => {
    let users = db.get('users').value();
    let books = db.get('books').value();

    return res.render('transactionCreate', { users: users, books: books });
});

router.post('/create', (req, res) => {
    let userId = req.body.userId;
    let bookId = req.body.bookId;
    let user = db.get('users').find({ id: userId }).value();
    let book = db.get('books').find({ id: bookId }).value();
    let name = user.name + '--' + book.name;
    db.get('transactions').push({ name: name, userId: userId, bookId: bookId, id: shortid.generate() }).write();
    return res.redirect('/transactions');
});

module.exports = router;