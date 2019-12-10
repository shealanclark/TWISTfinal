var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PeopleSchema = new Schema(
  {
    firstName: {type: String, required:true},
    lastName: {type: String, required: true},
    role: {type: String, required: true},
    //REQUIRED NEEDS TO BE RE-ADDED TO TOPICS
    topic1: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'},
    topic2: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'},
    topic3: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'},
    topic4: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'},
    topic5: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'},
    topic6: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'},
    highschoolId: {type: Schema.Types.ObjectId, ref: 'highschool'},
    email: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true},
    block1: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'},
    block2: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'},
    block3: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'},
    block4: {type: Schema.Types.ObjectId, ref: 'perSessionInfo'}
  }
);

PeopleSchema
.virtual('url')
//.get ( => {
  //Not sure what goes here yet
//});

module.exports=mongoose.model('people', PeopleSchema);