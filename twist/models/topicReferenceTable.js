var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TopicReferenceSchema = new Schema(
  {//removed topicId
    //re-add required to peopleInfo
    topicName: {type: String, required: true},
    topicDesc: {type: String, required: true},
    peopleInfo: {type: Schema.Types.ObjectId, ref: 'people'}
  }
);

TopicReferenceSchema
.virtual('url')
// .get ( => {
//   //Not Sure What Goes Here Yet
// });

module.exports = mongoose.model('topicRef', TopicReferenceSchema);