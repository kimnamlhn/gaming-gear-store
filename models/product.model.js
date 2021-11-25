const db = require('../utils/db');
const TBL_PRODUCT = 'product';

module.exports = {

    all : async function(){
        return await db.load(`select * from ${TBL_PRODUCT}`);
    },
    add : async function(entity) {
        return await db.add(entity, TBL_PRODUCT);
    },
    update : async function(newVal, idProduct, attribute) {
        const sql = `
        update ${TBL_PRODUCT} set ${attribute} = '${newVal}' where idProduct = ${idProduct}
        `;
        return await db.load(sql);    
    },
    single: async function(idProduct){
        return await db.load(`select * from ${TBL_PRODUCT} where idProduct = ${idProduct} `);

    }
}