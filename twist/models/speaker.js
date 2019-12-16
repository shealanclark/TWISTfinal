var mongoose = require('mongoose');
var topic = require('./topicReferenceTable');

var Schema = mongoose.Schema;

var SpeakerSchema = new Schema(
  {//removed speakerId
	lastName: {type: String, required: true},
	firstName: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: String, required: true},
	topicId: {type: Schema.Types.ObjectId,ref:'Topic',required: true},
  }
);

SpeakerSchema
.virtual('info')
.get(function(){
  return this.lastName+', '+this.firstName+' - '+topic.name;
});

module.exports = mongoose.model('speaker', SpeakerSchema);