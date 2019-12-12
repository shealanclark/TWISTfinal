var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlockReferenceSchema = new Schema(
  {// We can use Mongo's randomly generated ID as an identity property
    blockNumber: {type: Number, required: true, primarykey:true},
    blockStart: {type: String, required: true},
    blockEnd: {type: String, required: true}
  }
);

BlockReferenceSchema
.virtual('url')
// .get ( => {
//   Not sure what goes here yet
// });

module.exports = mongoose.model('block', BlockReferenceSchema);