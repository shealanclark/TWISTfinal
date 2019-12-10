var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoomReferenceSchema = new Schema(
  {
    roomNumber: {type: String, required: true},
    capacity: {type: Number, required: true}
  }
);

RoomReferenceSchema
.virtual('url')
// .get(() => {
//   //Not Sure what We're returning yet
// })

module.exports = mongoose.model('Room', RoomReferenceSchema);