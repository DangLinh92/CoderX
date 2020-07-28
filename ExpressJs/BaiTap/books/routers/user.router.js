const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const db = require('../db');

router.get('/', (req, res) => {
    var users = db.get('users').value();
    return res.render('userViews/index', { users: users });
});

router.get('/new', (req, res) => {
    return res.render('userViews/addUser');
});

router.post('/new', (req, res) => {
    let id = shortid.generate();
    let name = req.body.name;
    db.get('users').push({ id: id, name: name }).write();
    return res.redirect('/users');
});

router.get('/edit/:id', (req, res) => {
    var id = req.params.id;
    var user = db.get('users').find({ id: id }).value();
    return res.render('userViews/editUser', { user: user });
});

router.post('/edit', (req, res) => {
    var name = req.body.name;
    var id = req.body.id;
    db.get('users').find({ id: id }).assign({ name: name }).write();
    return res.redirect('/users');
});

router.get('/delete/:id', (req, res) => {
    var id = req.params.id;
    db.get('users').remove({ id: id }).write();
    return res.redirect('/users');
});

module.exports = router;