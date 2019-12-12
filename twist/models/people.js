var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PeopleSchema = new Schema(
  {
    lastName: {type: String, required: true},
    firstName: {type: String, required:true},
    role: {type: String, required: true},
    topic1: {type: String, ref: 'topicReferenceTable', required: true},
    topic2: {type: String, ref: 'topicReferenceTable', required: true},
    topic3: {type: String, ref: 'topicReferenceTable', required: true},
    topic4: {type: String, ref: 'topicReferenceTable', required: true},
    topic5: {type: String, ref: 'topicReferenceTable', required: true},
    topic6: {type: String, ref: 'topicReferenceTable', required: true},
    highschoolName: {type: String, ref: 'highschool'},
    email: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true},
    block1: {type: String, ref: 'perSessionInfo'},   //  These are sessionID s
    block2: {type: String, ref: 'perSessionInfo'},
    block3: {type: String, ref: 'perSessionInfo'},
    block4: {type: String, ref: 'perSessionInfo'}
  }
);

PeopleSchema
.virtual('url')
//.get ( => {
  //Not sure what goes here yet
//});

module.exports=mongoose.model('people', PeopleSchema);