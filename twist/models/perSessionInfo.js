var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PerSessionSchema = new Schema(
  {
    sessionId: {type: Number, required: true},
    time: {type: Date, required: true},
    roomNumber: {type: Schema.Types.ObjectId, ref: 'roomReferenceTable', required: true},
    topicId: {type: Schema.Types.ObjectId, ref: 'topicReferenceTable', required: true},
    speakerID: {type: Schema.Types.ObjectId, ref: 'speaker', required: true},
    blockId: {type: Schema.Types.ObjectId, ref: 'blockReferenceTable', required: true},
    participants: {type: Schema.Types.ObjectId, ref: '', required: true}
  }
);

PerSessionSchema
.virtual('url')
.get ( => {
  //Not sure what we're returning yet
});

module.exports = mongoose.model('perSessionInfo', PerSessionSchema);