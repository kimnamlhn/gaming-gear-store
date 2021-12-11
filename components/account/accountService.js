const moment = require('moment');
const sequelize = require('sequelize');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { models } = require('../../models');

const listAccounts = async(type) => {
    const {count,rows} = await models.account.findAndCountAll({
        where: {role:type},
        raw:true,
    })
    return {count,rows}
}

const createAccount = async (entity) => {
    try {
        const account = await models.account.findOne({where:{email: entity.email}})
        if (account) {
            return {error: 'Account already exists.', user: null}
        }
        if (!validator.isEmail(entity.email)) {
            return {error: 'Please enter a valid email address.', user: null}
        }
        if(entity.password.length < 6) {
            return {error: 'Your password must be at least 6 characters long.', user: null}
        }
        if(entity.password !== entity.cfm_password) {
            return {error: `The passwords you typed aren't matching.`, user: null}
        }
        if(entity.name.length === 0) {
            return {error: 'Please enter your name.', user: null}
        }
        if(entity.phone.length === 0) {
            return {error: 'Please enter your phone number.', user: null}
        }
        if(entity.address.length === 0) {
            return {error: 'Please enter your address.', user: null}
        }
        const hashPassword = await bcrypt.hash(entity.password, 10)
        const newAccount = await models.account.create({
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
        return{error: null, user: newAccount}
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
    listAccounts,
    createAccount,
    getProfile,
};