var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TopicReferenceSchema = new Schema(
  {//removed topicId
    topicName: {type: String, required: true},
    topicDesc: {type: String, required: true}
  }
);

TopicReferenceSchema
.virtual('name')
.get(function(){
  return this.topicName;
});

module.exports = mongoose.model('topicRef', TopicReferenceSchema);