const moment = require('moment');
const sequelize = require('sequelize');
const validator = require('validator');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const {v4:uuidv4, validate:uuidValidate} = require('uuid');
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

const forgotPassword = async (user_email) => {
    if (!validator.isEmail(user_email)) return 'Please enter a valid email address.';
    const token = uuidv4();
    const account = await models.account.findOne({
        where: {email: user_email}
    })
    if(account.locked) return 'This account is locked.';
    account.token = token;
    account.tokenExpire = moment();
    account.save();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }
    });
    const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: user_email,
        //to: process.env.MAIL_USERNAME,
        subject: `Reset password của bạn`,
        html: `<p>Click this link to reset your password. <a href="http://localhost:3000/account/reset-password?token=${token}">Click here.</a> This link will expires in 15 minutes.</p>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            return 'Check your email inbox for the link to reset your password.'
        }
    });
    // await account.save();
    return 'Check your email inbox for the link to reset your password.'
}

const resetPasswordCheck = async (_token) => {
    if(!uuidValidate(_token)) return false; // Check if token is valid
    const account = await models.account.findOne({
        where: {token: _token}
    })
    if(account) { // Check if found account with token
        const duration = moment().diff(moment(account.tokenExpire),'minutes');
        if(duration > 15) return false; // Check token expiration
        else return true;
    }
    else return false;

}

const resetPassword = async (entity) => {
    if(!uuidValidate(entity.token)) return {valid:false}; // Check if token is valid
    const account = await models.account.findOne({
        where: {token: entity.token}
    })
    if(account) { // Check if found account with token
        const duration = moment().diff(moment(account.tokenExpire),'minutes');
        if(duration > 15) return {valid:false}; // Check token expiration
        else {
            if(entity.password.length < 6) {
                return {valid:true,done:false, message: 'Your password must be at least 6 characters long.'}
            }
            if(entity.password !== entity.cfm_password) {
                return {valid:true,done:false,message: `The passwords you typed aren't matching.`}
            }
            const hashPassword = await bcrypt.hash(entity.password, 10)
            account.password = hashPassword;
            account.token = null;
            account.tokenExpire = null;
            account.updatedAt = moment();
            await account.save();
            return {valid:true,done:true,message:'You can now login with your new password'}
        }
    }
    else return {valid:false};
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
    forgotPassword,
    resetPasswordCheck,
    resetPassword,
    getProfile,
};