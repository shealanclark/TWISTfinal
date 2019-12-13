let session = require('../models/perSessionInfo');
let speaker=require('../models/speaker');
let topicRef=require('../models/topicReferenceTable');
let block=require('../models/blockReferenceTable');
let room=require('../models/roomReferenceTable');
const validator = require('express-validator');

exports.new_session = [
    validator.body('roomNumber', 'topicId', 'speakerId', 'blockId', 'participants').isLength({min: 1}).trim(),
    validator.sanitizeBody('roomNumber','topicId','speakerId','blockId','participants').escape(),
    (req, res, next) => {
        var newSession = new session({
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
            topicDesc:req.body.topicDesc
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

exports.newBlock=[
    validator.sanitizeBody('blockNumber','blockStart','blockEnd').escape(),

    (req,res,next)=>{
        const errors=validator.validationResult(req);

        var newBlock=new block({
            blockNumber:req.body.blockNumber,
            blockStart:req.body.blockStart,
            blockEnd:req.body.blockEnd,
        })

        if (!errors.isEmpty()){
            res.render('dashboard/add-block/add-block',{blockNumber:newBlock.blockNumber,blockStart:newBlock.blockStart,blockEnd:newBlock.blockEnd,errors:errors.array()});
            return;
        }
        else{
            newBlock.save(function(err){
                if(err){return next(err);}
            })
            res.redirect('/dashboard');
        }
    }
]

exports.getCreateSession=function(req,res,next){
    room.find()
        .exec(function(err,list_rooms){
            if(err){return next(err);}
            res.render('dashboard/create-session/create-session',{room_list:list_rooms});
        });
};