var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET test page. */
router.get('/prueba', function(req, res, next) {
  res.render('prueba', { title: 'Programacion Computacional IV' });
});

module.exports = router;
