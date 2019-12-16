var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PerSessionSchema = new Schema(
  { // We can use Mongo's randomly generated ID as an identity property
    topicId: {type: String, ref: 'topicReferenceTable', required: true},
    blockNumber: {type: Number, ref: 'blockReferenceTable', required: true},
    roomNumber: {type: String, ref: 'roomReferenceTable', required: true},
    participantListId: {type: Schema.Types.ObjectId, ref: 'ParticipantList'}
  }		// Should this reference the participantList table?
);//The name of the session is the topic.

PerSessionSchema
.virtual('url')
// .get ( => {
//   //Not sure what we're returning yet
// });

module.exports = mongoose.model('session', PerSessionSchema);