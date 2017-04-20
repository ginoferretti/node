const app = require('express')();

app.all('*', (req, res) => {
    res.status(404).send('<h1>404: Not Found</h1><img src="/img/sadcat.jpg" alt="sad cat">');
});

module.exports = app;
