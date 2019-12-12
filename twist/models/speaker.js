var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SpeakerSchema = new Schema(
  {//removed speakerId
	lastName: {type: String, required: true},
	firstName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  topicId: {type: String, ref: 'topicReferenceTable', required: true}
  }
);

SpeakerSchema
.virtual('url')
// .get ( => {
//   //Not Sure What Goes Here Yet
// });

module.exports = mongoose.model('speaker', SpeakerSchema);