//导入express模块
const exp = require('express');

//创建一个Application对象，本质上是对原生node.js的封装，包含使用了http等模块
const app = exp();

//路由
app.get('/', (req, res) => {
    //@1 send string
    //res.send('hello world.');

    //@2 send json data
    res.send({ name: 'dataValue' });
});

//监听
app.listen(80);