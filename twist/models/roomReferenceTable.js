var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoomReferenceSchema = new Schema(
  {
    roomNumber: {type: String, required: true, primarykey:true},
    capacity: {type: Number, required: true}
  }
);

RoomReferenceSchema
.virtual('number')
.get(function(){
  console.log(this.roomNumber)
  return this.roomNumber;
});

RoomReferenceSchema
.virtual('cap')
.get(function(){
  return this.capacity;
});

module.exports = mongoose.model('Room', RoomReferenceSchema);