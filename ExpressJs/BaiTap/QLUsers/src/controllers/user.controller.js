require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const shortid = require('shortid');
const db = require('../lowdb');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.newUser = (req, res) => {
    return res.render('newUser');
};

module.exports.postNew = (req, res) => {
    var user = req.body;
    var userId = shortid.generate();
    var order = db.get('users').findLast().value().order;
    if (!isNaN(order)) {
        var odr = Number.parseInt(order) + 1;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(user.password, salt, function (err, hash) {
                // Store hash in your password DB.
                db.get('users')
                    .push({
                        order: odr,
                        id: userId,
                        name: user.name,
                        email: user.email,
                        password: hash,
                        phone: user.phone,
                    })
                    .write();

                sendMail(
                    user.email,
                    'admin@gmail.com',
                    'MAIL:',
                    'Create user success!',
                    '',
                );
                return res.redirect('/users/list');
            });
        });
    }
};

function sendMail(to, from, subject, text, html) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: to,
        from: from, // Use the email address or domain you verified above
        subject: subject,
        text: text,
        html: html,
    };

    sgMail.send(msg).then(
        () => {},
        (error) => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body);
            }
        },
    );
}
