var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var animals = require('animals');
	var animal = animals();
  res.render('index', { title: animal });
});

module.exports = router;
