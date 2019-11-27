var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Could be wrong, but I think convention with Schemas is to capitalize
var RoomReferenceSchema = new Schema(
  {
    roomNumber: {type: String, required: true, min: 6, max: 10},
    capacity: {type: Number, required: true}
  }
)

RoomReferenceSchema
.virtual('url')
.get(function(){
  //1:07 am, will implement this later unless someone else does
})

module.exports = mongoose.model('roomReferenceTable', RoomReferenceSchema)