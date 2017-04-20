const app = require('express')();
const login = require('./login');

app.get('/', (req, res) => {
    res.send('<img src="/img/likebutton.jpg" alt="likebutton">');
});

module.exports = app;