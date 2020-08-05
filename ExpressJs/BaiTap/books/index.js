const express = require('express');
const app = new express();
const port = 3000;
const morgan = require('morgan');
const db = require('./db');
var cookieParser = require('cookie-parser');

const userRouter = require('./routers/user.router');
const bookRouter = require('./routers/book.router');
const transactionRouter = require('./routers/transactions.router');

var numberCookie = 0;
app.use(cookieParser());
app.use(express.static('public'));
app.use(morgan("short"));
app.use((req, res, next) => {
    if (req.cookies) {
        numberCookie++;
        console.log(`cookies: ${numberCookie}`);
    };

    next();
});

app.set('view engine', 'pug');
app.set('views', './views');

var bodyParser = require('body-parser');
const { static } = require('express');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.get('/', (req, res) => {
    return res.render('menu')
});

// book region
app.use('/books', bookRouter);

// User region
app.use('/users', userRouter);

app.use('/transactions', transactionRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));