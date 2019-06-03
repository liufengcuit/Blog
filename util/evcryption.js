const CryptoJS = require('crypto-js');
const config = require('../config/config.js');

module.exports.des3 = (data, salt, call) => {
    if(typeof data === 'object') {
        data = JSON.stringify(data);
    }
    const md5_hash = CryptoJS.MD5(salt + "" + config.dataKey).toString();
    call(CryptoJS.TripleDES.encrypt(data, CryptoJS.enc.Utf8.parse(md5_hash), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString());
}

exports.des3Decrypt = (data, salt, call) =>{
    const md5_hash = CryptoJS.MD5(key + "" + config.dataKey).toString();
    call(CryptoJS.TripleDES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(data)
    }, CryptoJS.enc.Utf8.parse(md5_hash), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8));
}

exports.randSalt = (len) => {
    let num = "";
    for (let i = 0; i < len; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}