var express = require('express');
var router = express.Router();

// GET login
router.get('/login', function(req, res, next) {
  res.render('login/login', {title: 'Login'});
});

// POST login
router.post('/login', function(req, res, next){
  res.redirect('dashboard', isLoggedIn, {title: 'Admin Dashboard');
});

module.exports = router;
