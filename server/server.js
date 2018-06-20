const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo app v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Mike',
        age: 25,
    },{
        name: 'Andrew',
        age: 27
    },{
        name: 'Maibes',
        age: 26
    }]);
});

app.listen(3000);

module.exports.app = app;