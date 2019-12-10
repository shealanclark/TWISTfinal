const validator = require('express-validator');

exports.addRoomPost = [
  validator.body('roomName', 'capacity').isLength({min: 1, max: 10}).trim(),
  //Removes potential xss characters
  validator.sanitizeBody('roomName', 'capacity').escape(),
  (req, res, next) => {
    const errors = validator.validationResult(req);
    //Create a room
    var room = new Room(
      {name: req.body.roomName},
      {capacity: req.body.capacity}
    );
    
    if (!errors.isEmpty()){
      //There's an error
      res.render('dashboard/add-room/add-room', {roomName: room.name, capacity: room.capacity, errors: errors.array()});
      return;
    }
    else{
      Room.findOne({ 'roomName': req.body.roomName}) //Checks to see if room is already created
        .exec( function(err, foundRoom)){
          if (err) {return next(err);}
          //Found one
          if (foundRoom){
            res.render('dashboard/add-room/add-room', {roomName: room.name, capacity: room.capacity, exists: 'Room Already Exists'});
          }
          else{
            room.save(function(err)){
              if (err){ return next(err);}
              
            }
          }
        }
    }
  }
]