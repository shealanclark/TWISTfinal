let Room=require('../models/roomReferenceTable');
const validator = require('express-validator');

exports.addRoomPost = [
  validator.body('roomNumber', 'capacity').isLength({min: 1, max: 10}).trim(),
  validator.body('capacity').isNumeric(),
  //Removes potential xss characters
  validator.sanitizeBody('roomNumber', 'capacity').escape(),
  (req, res, next) => {
    const errors = validator.validationResult(req);
    //Create a room
    var room = new Room(
      {roomNumber: req.body.roomNumber,
      capacity: req.body.capacity}
    );
    
    if (!errors.isEmpty()){
      //There's an error
      res.render('dashboard/add-room/add-room', {roomNumber: room.roomNumber, capacity: room.capacity, errors: errors.array()});
      return;
    }
    else{
      Room.findOne({ 'roomNumber': req.body.roomNumber}) //Checks to see if room is already created
        .exec( function(err, foundRoom){
          if (err) {return next(err);}
          //Found one
          if (foundRoom){
            res.render('dashboard/add-room/add-room', {roomNumber: room.roomNumber, capacity: room.capacity, exists: 'Room Already Exists'});
          }
          else{
            room.save(function(err){
              if (err){ return next(err);}
            });
            res.redirect('/dashboard');
          }
        });
    }
  }
]