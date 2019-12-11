let session = require('../models/perSessionInfo');
let speaker=require('../models/speaker');
let topicRef=require('../models/topicReferenceTable');
const validator = require('express-validator');

exports.new_session = [
    validator.body('time', 'roomNumber', 'topicId', 'speakerId', 'blockId', 'participants').isLength({min: 1}).trim(),
    validator.sanitizeBody('time','roomNumber','topicId','speakerId','blockId','participants').escape(),
    (req, res, next) => {
        var newSession = new session({
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

exports.newSpeaker=[
    validator.sanitizeBody('firstName','lastName','email','phone','topic').escape(),

    (req,res,next)=>{
        const errors=validator.validationResult(req);

        var newTopic=new topicRef({
            topicName:req.body.topicName,
            topicDesc:req.body.topicDesc,
            // peopleInfo:req.body.peopleInfo, not sure what this is
        })

        var newSpeaker=new speaker({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            phone:req.body.phone,
            topic:newTopic._id
        })

        if (!errors.isEmpty()){
            res.render('dashboard/add-speaker/add-speaker',{firstName:newSpeaker.firstName,lastName:newSpeaker.lastName,email:newSpeaker.email,phone:newSpeaker.phone,topic:newSpeaker.topic,errors:errors.array()});
            return;
        }
        else{
            newTopic.save(function(err){
                if(err){return next(err);}
            });
            newSpeaker.save(function(err){
                if(err){return next(err);}
            });
            res.redirect('/dashboard');
        }
    }
]