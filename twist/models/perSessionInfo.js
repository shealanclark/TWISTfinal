var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PerSessionSchema = new Schema(
  { // We can use Mongo's randomly generated ID as an identity property
    topicId: {type: String, ref: 'topicReferenceTable', required: true},
    blockNumber: {type: Number, ref: 'blockReferenceTable', required: true},
    roomNumber: {type: String, ref: 'roomReferenceTable', required: true},
    speakerId: {type: String, ref: 'speaker', required: true},
    participants: {type: String, required: true}
  }		// I don't know how to type this last one.
);

PerSessionSchema
.virtual('url')
// .get ( => {
//   //Not sure what we're returning yet
// });

module.exports = mongoose.model('session', PerSessionSchema);