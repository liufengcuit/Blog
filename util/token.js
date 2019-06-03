const jwt = require('jsonwebtoken');
const secret = require('../config/config.js');

exports.createToken = payload => {
    const token = jwt.sign(payload, secret.tokenKey, { expiresIn: '5h' })       //可设置1h 1days 1d  默认为ms
    return token;
}