const {models} = require('../../models');

const list = () => {
    return models.product.findAll({
        raw : true,
        attributes: ['idProduct', 'name', 'price','images'],
        include : [
            {model:models.category, attributes: ['nameCategory'], as: 'category_category'},
        ],
    });
};
module.exports = {list};