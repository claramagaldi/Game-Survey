// Load the Mongoose module and Schema object
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// Define a new 'SurveySchema'
var SurveySchema = new Schema({
    surveyId: { type: String, unique: true, required: true },
    gameGenre: String,
    daysPerYear: Number,
    age: Number
});
// Create the 'Game' model out of the 'GameSchema'
mongoose.model('Survey', SurveySchema);