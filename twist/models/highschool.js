var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HighschoolSchema = new Schema(
  {
    highschoolId: {type: Number, required: true};
    name: {type: String, required: true},
    counselor: {type: String, required: true},
    counselorEmail: {type: String},
    counselorPhone: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String}
  }
);

HighschoolSchema
.virtual('url')
.get ( => {
  //Not sure what goes here yet
});

module.exports = mongoose.model('highschool', HighschoolSchema);