const moment = require('moment');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { models } = require('../../models');

const listAdminAccounts = async() => {
    const {count,rows} = await models.account.findAndCountAll({
        where: {role:1},
        raw:true,
    })
    return {count,rows}
}

const createAccount = async (entity) => {
    try {
        const account = await models.account.findOne({where:{email: entity.email}})
        if (account) {
            throw new Error('Email already exists.');
        }
        const hashPassword = await bcrypt.hash(entity.password, 10)
        return await models.account.create({
            idAccount: null,
            email: entity.email,
            password: hashPassword,
            name: entity.name,
            address: entity.address,
            phone: entity.phone,
            role: entity.role,
            createdAt: moment(),
            updatedAt: moment(),
            locked: 0
        })
    } catch (err) {
        console.log(err);
    }
}

const getProfile = async (id) => {
    return models.account.findOne({
        where: {
            idAccount: id,
        },
        attributes: {
            exclude: ['password','role','locked']
        },
        raw:true,
    })
}

module.exports = {
    listAdminAccounts,
    createAccount,
    getProfile,
};