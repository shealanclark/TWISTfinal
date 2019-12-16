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
router.get('/dashboard/create-session', auth.hasAuth, session.getCreateSession);
// router.get('/dashboard/create-session', auth.hasAuth, function(req, res, next){
//   res.render('dashboard/create-session/create-session');
// });

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

//GET attendee-list
router.get('/dashboard/attendee-list', auth.hasAuth, attendee.list);

//GET edit-attendee
router.get('/dashboard/attendee-list/edit-attendee', auth.hasAuth, function(req, res, next){
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

//GET room-list
router.get('/dashboard/room-list', auth.hasAuth, room.list);

//POST edit-room
router.post('/dashboard/edit-room', auth.hasAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET print-schedule
router.get('/dashboard/print-schedule', auth.hasAuth, function(req, res, next){
  res.render('dashboard/print-schedule/print-schedule');
});

//GET logout
router.get('/logout', auth.logout, function (req, res, next){
  res.redirect('/');
});

//GET add-speaker
router.get('/dashboard/add-speaker', auth.hasAuth, function (req, res, next){
  res.render('dashboard/add-speaker/add-speaker');
});

//POST add-speaker
router.post('/dashboard/add-speaker', auth.hasAuth, session.newSpeaker);

//GET edit-speaker
router.get('/dashboard/edit-speaker', auth.hasAuth, function (req, res, next){
  res.render('dashboard/edit-speaker/edit-speaker');
});

//GET speaker-list
router.get('/dashboard/speaker-list', auth.hasAuth, session.speakerList);

//POST edit-speaker
router.post('/dashboard/edit-speaker', auth.hasAuth, function(req, res, next){
  res.redirect('/dashboard');
});

//GET add-block
router.get('/dashboard/add-block', auth.hasAuth, function(req, res, next){
  res.render('dashboard/add-block/add-block');
});

//POST add-block
router.post('/dashboard/add-block', auth.hasAuth, session.newBlock);

//GET edit-block
router.get('/dashboard/block-list/edit-block', auth.hasAuth, function (req, res, next){
  res.render('dashboard/edit-block/edit-block');
});

//POST edit-block
router.post('/dashboard/edit-block'), auth.hasAuth, function(req, res, next){
  res.redirect('/dashboard');
}

//GET block-list
router.get('/dashboard/block-list', auth.hasAuth, session.getEditBlocks);

module.exports=router;