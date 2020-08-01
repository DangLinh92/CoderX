const express = require('express');
const app = new express();
const port = 3000;
const morgan = require('morgan');
const db = require('./db');

const userRouter = require('./routers/user.router');
const bookRouter = require('./routers/book.router');
const transactionRouter = require('./routers/transactions.router');

app.use(express.static('public'))
app.use(morgan("short"));

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