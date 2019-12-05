var express = require('express');
var router = express.Router();

// GET home
router.get('/', function(req, res, next) {
  res.render('index');
});

// GET register
router.get('/register', function(req, res, next){
  res.render('register/register');
});

//POST register
router.post('/register', function(req, res, next){
  res.redirect('/confirmation');
});

//The redirect sends a GET for /confirmation. Route below handles GET
//GET confirmation
router.get('/confirmation', function(req, res, next){
  res.render('register/confirmation/confirmation');
});

module.exports = router;
