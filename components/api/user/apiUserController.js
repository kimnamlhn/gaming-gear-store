const apiUserService = require('./apiUserService');

exports.getUserList = async (req, res) => {
	try {
		if (!req.user || !req.user.role) return;
		let page = parseInt(req.query.page);
		let limit = 5; // number of user per page
		const users = await apiUserService.getUserList(page, limit);
		users.limit = limit;
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};
