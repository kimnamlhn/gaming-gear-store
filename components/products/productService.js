const {models} = require('../../models');
const {Op} = require('sequelize');

// Product List Page
const pageValidation = (page) => {
    page = isNaN(page) ? 0 : Number(page);
    page = page >= 0 ? page : 0;
    return page;
}

const getAllProducts = (page = 0,itemsPerPage = 9) => {
    return models.product.findAndCountAll({
        offset: page * itemsPerPage,
        limit: itemsPerPage,
        raw : true,
        attributes: ['idProduct', 'name', 'brand', 'price','thumbnail'],
        include : [
            {model:models.category, attributes: ['nameCategory'], as: 'category_category'},
        ],
    });
};
// Product Details Page
const getDetails = (id) => {
    return models.product.findOne({
        where: {
            idProduct: id,
        },
        raw : true,
        include : [{
                model:models.category, attributes: ['nameCategory'], as: 'category_category',
            },
        ],
    });
}

const getDetailImages = (id) => {
    return models.product_images.findAll({
        where: {
            product: id,
        },
        raw : true,
    });
}

const getDetailRelatedProducts = (id, idCategory) => {
    return models.product.findAll({
        where: {
            idProduct: {
                [Op.not]: id
            },
            category: idCategory
        },
        attributes: ['idProduct','name','price','brand','thumbnail'],
        raw: true,
        limit: 4,
        include : [{
            model:models.category, attributes: ['nameCategory'], as: 'category_category',
        },
    ],
    })
}
module.exports = {
    pageValidation,
    getAllProducts,
    getDetails,
    getDetailImages,
    getDetailRelatedProducts,
};