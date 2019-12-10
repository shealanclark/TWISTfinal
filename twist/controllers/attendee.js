let models=require('../models/people');
const {sanitizeBody}=require('express-validator/filter');

exports.show_register=function(req,res,next){
    res.render('register/register')
}

exports.new_attendee=[
    sanitizeBody('firstName').escape(),
    sanitizeBody('lastName').escape(),
    sanitizeBody('role').escape(),
    sanitizeBody('email').escape(),
    sanitizeBody('address').escape(),
    sanitizeBody('city').escape(),
    sanitizeBody('state').escape(),
    sanitizeBody('zip').escape(),
    (req,res,next)=>{
    const newPerson=models.people.build({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        role:req.body.role,
        topic1:req.body.topic1,
        topic2:req.body.topic2,
        topic3:req.body.topic3,
        topic4:req.body.topic4,
        topic5:req.body.topic5,
        topic6:req.body.topic6,
        //highschoolId
        email:req.body.email,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip
    })//not right
    newPerson.save(function(err){
        if (err) {return next(err);}
        res.redirect(show_confirmation);
    });
    }
]

exports.show_confirmation=function(req,res,next){
    res.render('register/confirmation/confirmation')
}