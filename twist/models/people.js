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
    block1: {type: String, ref: 'perSessionInfo'},   //  These are participantList's they're a part of
    block2: {type: String, ref: 'perSessionInfo'},
    block3: {type: String, ref: 'perSessionInfo'},
    block4: {type: String, ref: 'perSessionInfo'}
  }
);

PeopleSchema
.virtual('name')
.get(function(){
  return this.firstName + ' ' + this.lastName;
});

PeopleSchema
.virtual('fname')
.get(function(){
  return this.firstName;
});

PeopleSchema
.virtual('lname')
.get(function(){
  return this.lastName;
});

PeopleSchema
.virtual('addy')
.get(function(){
  return this.address;
});

PeopleSchema
.virtual('sitty')
.get(function(){
  return this.city;
});

PeopleSchema
.virtual('zoop')
.get(function(){
  return this.zip;
});

PeopleSchema
.virtual('school')
.get(function(){
  return this.highschoolName;
});

PeopleSchema
.virtual('mail')
.get(function(){
  return this.email;
});

module.exports=mongoose.model('people', PeopleSchema);