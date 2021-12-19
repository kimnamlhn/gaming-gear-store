const apiProductService = require('./apiProductService');

exports.getProducts = async (req, res) => {
	try {
		const filter = {
			page: parseInt(req.query.page),
			category: parseInt(req.query.category),
			brand: req.query.brand,
			rating: parseInt(req.query.rating),
			priceMin: parseInt(req.query.pricemin),
			priceMax: parseInt(req.query.pricemax),
			limit: parseInt(req.query.limit),
		};
		// 1: Price down, 2: Price up, 3: Rating down:, 4: Rating up, 5: Date down, 6: Date up
		const order = parseInt(req.query.sorting);
		const search = req.query.search.trim();
		const products = await apiProductService.getProducts(filter, order, search);
		products.limit = filter.limit;
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};

exports.searchProducts = async (req, res) => {
	try {
		const filter = {
			limit: parseInt(req.query.limit),
			page: parseInt(req.query.page),
		};
		const search = req.body.data.trim();
		if (search.length === 0) return res.status(201).json({ count: 0 });
		const products = await apiProductService.getProducts(filter, null, search);
		products.limit = filter.limit;
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({
			status: 'fail',
			message: error.message,
		});
	}
};
