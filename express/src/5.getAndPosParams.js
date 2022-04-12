const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //query是由express框架
    console.log(req.query);
    res.send(req.query);
});

//@方法1
//body-parser为内置模块，用于解析用户提交的数据
const bodyParser = require('body-parser');

//urlencoded返回一个路由函数用来路由请求，这个路由函数并为req添加一个body对象用于保存解析的用户请求数据
// extended: false 方法内部使用querystring模块处理请求参数的格式
// extended: true 方法内部使用第三方模块qs处理请求参数的格式
//This body object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
//app.use(bodyParser.urlencoded({ extended: false }));

//@方法2
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);

    //send json res
    //res.json(req.body)
});

app.listen(80);