const express = require('express');
const app = express();

const index = require('./routes/index');
const login = require('./routes/login');
const all = require('./routes/all');

const port = 8000;

app.use(index);
app.use(login);
app.use(express.static('public'));
app.use(all);

app.listen(8000, () => {
    console.log('Listening on port: %s', port);
})