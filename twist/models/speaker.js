var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SpeakerSchema = new Schema(
  {//removed speakerId
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    topic: {type: String, required: true}
  }
);

SpeakerSchema
.virtual('url')
// .get ( => {
//   //Not Sure What Goes Here Yet
// });

module.exports = mongoose.model('speaker', SpeakerSchema);