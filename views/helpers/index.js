var express_handlebars_sections = require('express-handlebars-sections');

module.exports = {
	addNum: require('./addNum'),
	checkIfEqual: require('./checkIfEqual'),
	lowerCase: require('./lowerCase'),
	section: express_handlebars_sections(),
	for: require('./forloop'),
	sumPrice: require('./sumPrice'),
	sumQuantity: require('./sumQuantity'),
	ratingStar: require('./ratingStar'),
};
