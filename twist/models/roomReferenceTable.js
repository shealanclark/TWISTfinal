var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoomReferenceSchema = new Schema(
  {
    roomNumber: {type: String, required: true, primarykey:true},
    capacity: {type: Number, required: true}
  }
);

RoomReferenceSchema
.virtual('info')
.get(function(){
  return this.roomNumber+' - '+this.capacity;
});

// RoomReferenceSchema
// .virtual('cap')
// .get(function(){
//   return this.capacity;
// });

module.exports = mongoose.model('Room', RoomReferenceSchema);