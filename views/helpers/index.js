var express_handlebars_sections = require('express-handlebars-sections');

module.exports = {
    addNum: require('./addNum'),
    checkIfEqual: require('./checkIfEqual'),
    pagination: require('./pagination'),
    lowerCase: require('./lowerCase'),
    section: express_handlebars_sections(),  
    for: require('./forloop'),
    rating_count: require('./rating_count'),
    rating_avg: require('./rating_avg'),
};