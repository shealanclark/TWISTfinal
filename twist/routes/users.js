var express = require('express');
var router = express.Router();

// GET home
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Twist Home'});
});

// GET register
router.get('/register', function(req, res, next){
  res.render('register/register', {title: 'Register Page'});
});

//POST register
router.post('/register', function(req, res, next){
  res.render('confirmation/confirmation', {title: 'Confirmation Page'});
});

module.exports = router;
