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
        const products = await apiProductService.getProducts(filter);
        products.limit = filter.limit;
        res.status(201).json(products);
        
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}