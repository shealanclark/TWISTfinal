let perSessionInfo = reqire('../models/perSessionInfo');
const {sanitizeBody} = require('express-validator');

exports.new_session = [
    validator.body(sessionId, time, roomNumber, topicId, speakerId, blockId, participants).isLength({min: 1}).trim(),
    sanitizeBody('sessionId').escape(),
    sanitizeBody('time').escape(),
    sanitizeBody('roomNumber').escape(),
    sanitizeBody('topicId').escape(),
    sanitizeBody('speakerId').escape(),
    sanitizeBody('blockId').escape(),
    sanitizeBody('participants').escape(),
    (req, res, next) => {
        var newSession = new session({
        sessionId: req.body.sessionId,
        time: req.body.time,
        roomNumber: req.body.roomNumber,
        topicId: req.body.topicId,
        speakerId: req.body.speakerId,
        blockId: req.body.blockId,
        participants: req.body.participants
        });
        newSession.save(function(err){
            if (err) {return next(err);}
        })
    }
]