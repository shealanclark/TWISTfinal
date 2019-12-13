var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TopicReferenceSchema = new Schema(
  {//removed topicId
    topicName: {type: String, required: true},
    topicDesc: {type: String, required: true}
  }
);

TopicReferenceSchema
.virtual('url')
// .get ( => {
//   //Not Sure What Goes Here Yet
// });

module.exports = mongoose.model('topicRef', TopicReferenceSchema);