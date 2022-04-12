const express = require('express');
const app = express();
const fs = require('fs');

// app.use((error, req, res, next) => {

//     console.log(error);
//     res.end('error....');
// });

// app.use((req, res, next) => {

//     console.log('normal...');
//     res.end('normal....');
// });

app.get('/', (req, res, next) => {
    console.log('get /');

    // fs.readFile('./1.txt', (error, result) => {
    //     if (error)
    //         next(error);
    //     else
    //         res.send('read file ok');
    // });

    //直接跳到错误处理中间件，而不是随后的
    next(new Error('test error'));
});

//不被执行
app.get('/', (req, res, next) => {
    console.log('second log');
});

//定义错误处理中间件
//必须放在最后一个， 如果没有那么会使用默认的错误处理中间件： 返回错误代码为500， 并将错误信息返回给客户端
app.use((error, req, res, next) => {
    console.log(error);
    res.end('error....');
    //继续使用后面默认的错误处理中间件
    //next(error);
});

//系统默认的错误处理中间件等价代码如下：
// app.use((error, req, res, next) => {
//     console.log(error.stack);
//     //res.status(500).send(error.message);
//     res.status(500).send(error.stack);
// });

app.listen(80);