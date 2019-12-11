var express = require('express');
var router = express.Router();
let room = require('../controllers/room');
let session = require('../controllers/session');
let attendee=require('../controllers/attendee');
let hasAuth = require('../controllers/auth');
let auth = false;

// GET login
router.get('/login', function(req, res, next) {
  res.render('login/login', {title: 'Login'});
});

// POST login
router.post('/login', hasAuth.hasAuth, hasAuth.isAuth, function(req, res, next){
  res.redirect('/dashboard');
});

// GET dashboard
router.get('/dashboard', hasAuth.isAuth, function(req, res, next){
  res.render('dashboard/dashboard');
});

//GET create-session
router.get('/dashboard/create-session', hasAuth.isAuth, function(req, res, next){
  res.render('dashboard/create-session/create-session');
});

//POST create-session
router.post('/dashboard/create-session', hasAuth.isAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET edit-session
router.get('/dashboard/edit-session', hasAuth.isAuth, function(req, res, next){
  res.render('dashboard/edit-session/edit-session');
});

//POST edit-session
router.post('/dashboard/edit-session', hasAuth.isAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET add-attendee
router.get('/dashboard/add-attendee', hasAuth.isAuth, function(req, res, next){
  res.render('dashboard/add-attendee/add-attendee');
});

//POST add-attendee
router.post('/dashboard/add-attendee', hasAuth.isAuth, attendee.newAttendee);

//GET edit-attendee
router.get('/dashboard/edit-attendee', hasAuth.isAuth, function(req, res, next){
  res.render('dashboard/edit-attendee/edit-attendee');
});

//POST edit-attendee
router.post('/dashboard/edit-attendee', hasAuth.isAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET add-room
router.get('/dashboard/add-room', hasAuth.isAuth, function(req, res, next){
  res.render('dashboard/add-room/add-room');
});

//POST add-room
router.post('/dashboard/add-room', hasAuth.isAuth, room.addRoomPost);

//GET edit-room
router.get('/dashboard/edit-room', hasAuth.isAuth, function(req, res, next){
  res.render('dashboard/edit-room/edit-room');
});

//POST edit-room
router.post('/dashboard/edit-room', hasAuth.isAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET print-schedule
router.get('/dashboard/print-schedule', hasAuth.isAuth, function(req, res, next){
  res.render('dashboard/print-schedule/print-schedule');
});

//GET add-speaker
router.get('/dashboard/add-speaker', hasAuth.isAuth, function (req, res, next){
  res.render('dashboard/add-speaker/add-speaker');
});

//POST add-speaker
router.post('/dashboard/add-speaker', hasAuth.isAuth, session.newSpeaker);

module.exports=router;