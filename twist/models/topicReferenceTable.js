var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TopicReferenceSchema = new Schema(
  {
    topicId: {type: Schema.Types.ObjectId, required: true},
    topicName: {type: String, required: true},
    topicDesc: {type: String, required: true},
    peopleInfo: {type: Schema.Types.ObjectId, ref: 'people', required: true}
  }
);

TopicReferenceSchema
.virtual('url')
.get ( => {
  //Not Sure What Goes Here Yet
});

module.exports = mongoose.model('speaker', TopicReferenceSchema);