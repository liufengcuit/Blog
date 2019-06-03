const multer = require('multer');
const util = require('../util/evcryption.js');
const jwt = require('../util/token.js');
const User = require('../db/user.js').User;

module.exports = function(router) {
    router.post('/login', (req, res) => {
        User.find(req.body, isExist => {
            const salt = util.randSalt(6);
            if(isExist) {
                // res.send({
                //     code: 200,
                //     message: 'success',
                //     data: util.des3({
                //         token: jwt.createToken({
                //             user: req.body.user,
                //             password: req.body.password,
                //             timestamp: new Date().getTime()
                //         }, salt)
                //     }),
                //     salt
                // })

                util.des3({token: jwt.createToken({
                                user: req.body.user,
                                password: req.body.password,
                                timestamp: new Date().getTime()
                            }, salt)
                        },
                        salt,
                        _res=> {
                        res.send({
                            code: 200,
                            message: 'success',
                            data: _res,
                            salt
                        })
                    })
            }else{
                res.send({
                    code: 1310,
                    message: '账号密码不正确'
                })
            }
        });
        // util.des3(req.body, salt, result => {
        //     res.send({
        //         data: result,
        //         salt
        //     });
        // })
    })
}