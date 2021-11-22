const {models} = require('../../models');

const list = () => {
    return models.product.findAll({
        raw : true,
    });
};
module.exports = {list};