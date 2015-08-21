var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Random Animal" });
});

router.get('/animal', function(req, res, next){
	var animals = require('animals');
	var animal = animals();
});

module.exports = router;
