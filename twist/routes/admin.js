var express = require('express');
var router = express.Router();
let room = require('../controllers/room');

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
  res.render('dashboard/create-session/create-session');
});

//POST create-session
router.post('/dashboard/create-session', function(req, res, next){
  res.redirect('/dashboard');
});

//GET edit-session
router.get('/dashboard/edit-session', function(req, res, next){
  res.render('dashboard/edit-session/edit-session');
});

//POST edit-session
router.post('/dashboard/edit-session', function(req, res, next){
  res.redirect('/dashboard');
});

//GET add-attendee
router.get('/dashboard/add-attendee', function(req, res, next){
  res.render('dashboard/add-attendee/add-attendee');
});

//POST add-attendee
router.post('/dashboard/add-attendee', function(req, res, next){
  res.redirect('/dashboard');
});

//GET edit-attendee
router.get('/dashboard/edit-attendee', function(req, res, next){
  res.render('dashboard/edit-attendee/edit-attendee');
});

//POST edit-attendee
router.post('/dashboard/edit-attendee', function(req, res, next){
  res.redirect('/dashboard');
});

//GET add-room
router.get('/dashboard/add-room', function(req, res, next){
  res.render('dashboard/add-room/add-room');
});

//POST add-room
router.post('/dashboard/add-room', room.addRoomPost);
//router.post('/dashboard/add-room', room.addRoomPost, function(req, res, next){
//  res.redirect('/dashboard');
//});

//GET edit-room
router.get('/dashboard/edit-room', function(req, res, next){
  res.render('dashboard/edit-room/edit-room');
});

//POST edit-room
router.post('/dashboard/edit-room', function(req, res, next){
  res.redirect('/dashboard');
});

//GET print-schedule
router.get('/dashboard/print-schedule', function(req, res, next){
  res.render('dashboard/print-schedule/print-schedule');
});

//GET add-speaker
router.get('/dashboard/add-speaker', function (req, res, next){
  res.render('dashboard/add-speaker/add-speaker');
});

//POST add-speaker
router.post('/dashboard/add-speaker', function (req, res, next){
  res.redirect('dashboard');
});

//GET add-schedule
router.get('/dashboard/add-schedule', function (req, res, next){
  res.render('dashboard/add-schedule/add-schedule');
});

//POST add-schedule
router.post('/dashboard/add-schedule', function (req, res, next){
  res.redirect('/dashboard');
});

//GET edit-schedule
router.get('/dashboard/edit-schedule', function (req, res, next){
  res.render('/dashboard/edit-schedule/edit-schedule');
});

//POST edit-schedule
router.post('/dashboard/edit-schedule', function (req, res, next){
  res.redirect('/dashboard');
});

module.exports=router;