const {models} = require('../../models');

const list = () => {
    return models.product.findAll({
        raw : true,
        attributes: ['idProduct', 'name', 'brand', 'price','thumbnail'],
        include : [
            {model:models.category, attributes: ['nameCategory'], as: 'category_category'},
        ],
    });
};

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
const getImages = (id) => {
    return models.product_images.findAll({
        where: {
            product: id,
        },
        raw : true,
    });
}

module.exports = {list, getDetails, getImages};