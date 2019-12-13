var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TopicReferenceSchema = new Schema(
  {//removed topicId
    topicName: {type: String, required: true},
    topicDesc: {type: String, required: true}
  }
);

TopicReferenceSchema
.virtual('pullTopics')		// pull topics from the database into the registration form
// .get (function() {
//	 return this.topicName;			// will this need an iterator/counter?
// });

.virtual('url')
// .get ( => {
//   //Not Sure What Goes Here Yet
// });

module.exports = mongoose.model('topicRef', TopicReferenceSchema);