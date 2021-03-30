//Load the index controller
var indexController = require('../controllers/index.server.controller');
// Load the 'game' controller
var surveyController = require('../controllers/survey.server.controller');


// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes
    
    app.route('/').get(indexController.renderIndex);
    app.route('/add_survey').get(indexController.renderAddSurvey);
    app.route('/add_survey').post(surveyController.createSurvey);
    app.route('/list_surveys').get(surveyController.readSurveys);
    app.route('/list_surveys/:surveyId').put(surveyController.updateBySurveyId)
        //.get(surveyController.read)
        
    
        // Set up the 'taskId' parameter middleware
    //All param callbacks will be called before any handler of 
    //any route in which the param occurs, and they will each 
    //be called only once in a request - response cycle, 
    //even if the parameter is matched in multiple routes
    //app.param('surveyId', surveyController.findSurveyBySurveyId);

};
