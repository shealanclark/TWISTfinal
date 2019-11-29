var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Could be wrong, but I think convention with Schemas is to capitalize
var RoomReferenceSchema = new Schema(
  {
    roomNumber: {type: String, required: true},
    capacity: {type: Number, required: true}
  }
);

RoomReferenceSchema
.virtual('url')
.get( => {
  //Not Sure what We're returning yet
})

module.exports = mongoose.model('roomReferenceTable', RoomReferenceSchema);