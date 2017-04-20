const app = require('express')();

app.get('/login', (req, res) => {
    res.send('<img src="/img/trump.jpg" alt="trump">');
});

module.exports = app;