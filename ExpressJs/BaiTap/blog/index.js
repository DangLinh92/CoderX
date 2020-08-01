const express = require('express');
const morgan = require('morgan')
const app = new express();
const port = 3000;

app.use(morgan("combined"));


app.get('/', (req, res) => {
    console.log('Hello world');
});

app.listen(port, () => { console.log('app listening at port 300') });