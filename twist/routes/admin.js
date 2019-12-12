var express = require('express');
var router = express.Router();
let room = require('../controllers/room');
let session = require('../controllers/session');
let attendee = require('../controllers/attendee');
let auth = require('../controllers/auth');
let sess;

// GET login
router.get('/login', function(req, res, next) {
  res.render('login/login', {title: 'Login'});
});

// POST login
router.post('/login', auth.login, function(req, res, next){
  res.redirect('/dashboard');
});

// GET dashboard
router.get('/dashboard', auth.hasAuth, function(req, res, next){
  res.render('dashboard/dashboard');
});

//GET create-session
router.get('/dashboard/create-session', auth.hasAuth, function(req, res, next){
  res.render('dashboard/create-session/create-session');
});

//POST create-session
router.post('/dashboard/create-session', auth.hasAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET edit-session
router.get('/dashboard/edit-session', auth.hasAuth, function(req, res, next){
  res.render('dashboard/edit-session/edit-session');
});

//POST edit-session
router.post('/dashboard/edit-session', auth.hasAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET add-attendee
router.get('/dashboard/add-attendee', auth.hasAuth, function(req, res, next){
  res.render('dashboard/add-attendee/add-attendee');
});

//POST add-attendee
router.post('/dashboard/add-attendee', auth.hasAuth, attendee.newAttendee);

//GET edit-attendee
router.get('/dashboard/edit-attendee', auth.hasAuth, function(req, res, next){
  res.render('dashboard/edit-attendee/edit-attendee');
});

//POST edit-attendee
router.post('/dashboard/edit-attendee', auth.hasAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET add-room
router.get('/dashboard/add-room', auth.hasAuth, function(req, res, next){
  res.render('dashboard/add-room/add-room');
});

//POST add-room
router.post('/dashboard/add-room', auth.hasAuth, room.addRoomPost);

//GET edit-room
router.get('/dashboard/edit-room', auth.hasAuth, function(req, res, next){
  res.render('dashboard/edit-room/edit-room');
});

//POST edit-room
router.post('/dashboard/edit-room', auth.hasAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET print-schedule
router.get('/dashboard/print-schedule', auth.hasAuth, function(req, res, next){
  res.render('dashboard/print-schedule/print-schedule');
});

//GET add-speaker
router.get('/dashboard/add-speaker', auth.hasAuth, function (req, res, next){
  res.render('dashboard/add-speaker/add-speaker');
});

//POST add-speaker
router.post('/dashboard/add-speaker', auth.hasAuth, session.newSpeaker);

module.exports=router;