var express = require('express');
var router = express.Router();

// GET login
router.get('/login', function(req, res, next) {
  res.render('login/login', {title: 'Login'});
});

// POST login
router.post('/login', function(req, res, next){
  res.redirect('/dashboard');
});

// GET dashboard
router.get('/dashboard', function(req, res, next){
  res.render('dashboard/dashboard');
});

//GET create-session
router.get('/dashboard/create-session', function(req, res, next){
  res.render('/create-session/create-session');
});

//POST create-session
router.post('/dashboard/create-session', function(req, res, next){
  res.redirect('/dashboard');
});

//GET edit-session
router.get('/dashboard/edit-session', function(req, res, next){
  res.render('/edit-session/edit-session');
});

//POST edit-session
router.post('/dashboard/edit-session', function(req, res, next){
  res.redirect('/dashboard');
});

//GET add-attendee
router.get('/dashboard/add-attendee', function(req, res, next){
  res.render('/add-attendee/add-attendee');
});

//POST add-attendee
router.post('/dashboard/add-attendee', function(req, res, next){
  res.redirect('/dashboard');
});

//GET edit-attendee
router.get('/dashboard/edit-attendee', function(req, res, next){
  res.render('/edit-attendee/edit-attendee');
});

//POST edit-attendee
router.post('/dashboard/edit-attendee', function(req, res, next){
  res.redirect('/dashboard');
});

//GET add-room
router.get('/dashboard/add-room', function(req, res, next){
  res.render('/add-room/add-room');
});

//POST add-room
router.post('/dashboard/add-room', function(req, res, next){
  res.redirect('/dashboard');
});

//GET edit-room
router.get('/dashboard/edit-room', function(req, res, next){
  res.render('/edit-room/edit-room');
});

//POST edit-room
router.post('/dashboard/edit-room', function(req, res, next){
  res.redirect('/dashboard');
});

//GET print-schedule
router.get('/dashboard/print-schedule', function(req, res, next){
  res.render('/edit-room/print-schedule');
});

module.exports = router;
