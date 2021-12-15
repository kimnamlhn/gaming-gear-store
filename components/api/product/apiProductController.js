const apiProductService = require('./apiProductService')

exports.getProducts = async (req,res) => {
    try {
        const filter = {
            page: parseInt(req.query.page),
            category: parseInt(req.query.category),
            brand: req.query.brand,
            rating: parseInt(req.query.rating),
            priceMin: parseInt(req.query.pricemin),
            priceMax: parseInt(req.query.pricemax),
            limit: parseInt(req.query.limit)
        }
        // 1: Price down, 2: Price up, 3: Rating down:, 4: Rating up, 5: Date down, 6: Date up
        const order = parseInt(req.query.sorting);
        const products = await apiProductService.getProducts(filter, order);
        products.limit = filter.limit;
        res.status(201).json(products);
        
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}