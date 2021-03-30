// Create a new 'renderIndex' controller method
exports.renderIndex = function (req, res) {
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('index', {title: 'Game Survey'} );
};

// Create a new 'renderAddSurvey' controller method
exports.renderAddSurvey = function (req, res) {
    // Use the 'response' object to render the 'add_survey' view with a 'title' property
    res.render('add_survey', { title: 'Add New Survey' });
};