var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RealLifeQuestionSchema = new Schema({
  difficulty: {type: Number, required: true},
  num: {type: Number, required: true, default: 1},
  question: { type: String, required: true },
  answer: { type: String, required: true },
  pic: {type: String, required: false, default: null},
  page: {type: String, required: true}
});

var RealLifeQuestion = mongoose.model('RealLifeQuestion', RealLifeQuestionSchema);

module.exports = RealLifeQuestion;