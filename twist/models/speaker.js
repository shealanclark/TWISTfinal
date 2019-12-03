var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SpeakerSchema = new Schema(
  {
    speakerId: {type: Schema.Types.ObjectId, required: true},
    speakerName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true}
  }
);

SpeakerSchema
.virtual('url')
.get ( => {
  //Not Sure What Goes Here Yet
});

module.exports = mongoose.model('speaker', SpeakerSchema);