var express = require('express');
var router = express.Router();
let attendee=require('../controllers/attendee')

// GET home
router.get('/', function(req, res, next) {
  res.render('index');
});

// GET register
router.get('/register',attendee.show_register)

//POST register
router.post('/register',attendee.new_attendee)
//router.post('/register', function(req, res, next){
//  res.redirect('/confirmation');
//});

//The redirect sends a GET for /confirmation. Route below handles GET
//GET confirmation
router.get('/confirmation',attendee.show_confirmation)

module.exports = router;
