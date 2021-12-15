const { v4: uuidv4 } = require('uuid');

module.exports = function (req, res, next) {
	if (!req.session.unauthId) {
		req.session.unauthId = uuidv4();
	}
	next();
};
