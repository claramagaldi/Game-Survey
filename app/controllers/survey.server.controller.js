// Load the 'Game' Mongoose model
var Survey = require('mongoose').model('Survey');

// Create a new 'createGame' controller method
exports.createSurvey = function (req, res, next) {
    // Create a new instance of the 'Survey' Mongoose model
    var survey = new Survey(req.body);
    // Use the 'Survey' instance's 'save' method to save a new game document
    survey.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.redirect('/list_surveys');
        }
    });
};

// Create a new 'readSurveys' controller method
exports.readSurveys = function (req, res, next) {
    // Use the 'Survey' static 'find' method to retrieve the list of items
    Survey.find({}, function (err, surveys) {
        if (err) {
            // Call the next middleware with an error message
            console.log('some error in readSurveys method')
            return next(err);
        } else {
            //
            res.render('list_surveys', {
                title: 'Survey Items',
                surveys: surveys
            });
        }
    });
};

//update a survey by survey id
exports.updateBySurveyId = function (req, res, next) {
    let query = { "surveyId": req.params.surveyId };

    // Use the 'Survey' static 'findOneAndUpdate' method 
    // to update a specific survey by survey id
    Survey.findOneAndUpdate(query, req.body, (err, survey) => {
        if (err) {
            console.log(err);
            // Call the next middleware with an error message
            return next(err);
        } else {
            console.log(survey);
            // Use the 'response' object to send a JSON response
            res.redirect('/list_surveys'); //display all surveys
        }
    });
}