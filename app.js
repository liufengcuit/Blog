const express = require('express');
const app = express();

const router = express().Router;


/**
*  解析表单类型的数据
*/
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/****/


/**
*  跨域请求配置
*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
/**/

const routes = require('./routes/index.js');

routes(app);


app.listen(8090, ()=>{
    console.log('8090端口号已启动!!!')
})