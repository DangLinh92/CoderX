require('dotenv').config();
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./lowdb');
const userRouter = require('./routers/user.router');
const authRouter = require('./routers/auth.router');
const productRouter = require('./routers/product.router');
const cookieParser = require('cookie-parser');
const authValidate = require('./validate/auth.validate');

const app = new express();
const port = 3000;

app.use(cookieParser(process.env.SECRET_KEY));

// template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    return res.render('login');
});

app.use('/users', userRouter); // authValidate.AuthLogin
app.use('/auth', authRouter);
app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
