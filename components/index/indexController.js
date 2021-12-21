const apiProductService = require('../api/product/apiProductService');

exports.list = async (req, res) => {
	try {
		let filter = {
			category: 1,
			limit: 6,
		};
		// 1: Price down, 2: Price up, 3: Rating down:, 4: Rating up, 5: Date down, 6: Date up
		let order = 5;
		const newLaptops = await apiProductService.getProducts(filter, order);
		filter.category = 2;
		const newPCs = await apiProductService.getProducts(filter, order);
		filter.category = 4;
		const newConsoles = await apiProductService.getProducts(filter, order);
		order = 3;
		filter.category = 1;
		const highestRatedLaptops = await apiProductService.getProducts(filter, order);
		filter.category = 2;
		const highestRatedPCs = await apiProductService.getProducts(filter, order);
		filter.category = 4;
		const highestRatedConsoles = await apiProductService.getProducts(filter, order);
		res.render('store/index', {
			title: 'Index | Electro',
			newLaptops,
			newPCs,
			newConsoles,
			highestRatedLaptops,
			highestRatedPCs,
			highestRatedConsoles,
		});
	} catch (error) {
		res.render('error', { error });
	}
};
