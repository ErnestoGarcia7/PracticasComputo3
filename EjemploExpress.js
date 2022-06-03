var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Express - Programacion Computacionl IV!');
});

app.listen(8081, function() {
    console.log('Ejecutando en puerto 8081!');
});