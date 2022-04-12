const express = require('express');

let app = express();

//1 first middleware
app.use((req, res, next) => {
    console.log('first use middleware');
    //默认是不会调用的，也就不会将数据传递到下一个中间件
    next();
});

//2 second middleware
app.use((req, res, next) => {
    console.log('second use middleware');
    next();
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    //res.send('/');
    next();

    //next();
    //res.send('/');

    //send函数被调用后就不应该有后续的数据处理和传递，否则，会出现 Cannot set headers after they are sent to the client错误
});

app.use('/index', (req, res) => {
    console.log('/index middleware');
    res.send('/index');
});

app.use('/mainPage', (req, res, next) => {
    console.log('/mainPage middleware');
    //res.send('/mainPage');
    next();
});

//如果会访问'/mainPage/user'目录，那么会依次进入的路由为：'/', '/mainPage', 'mainPage/user'
//注意，定义的顺序，这个路由在最后
app.use('/mainPage/user', (req, res) => {
    console.log('/mainPage/user middleware');
    res.send('/mainPage/user');
});

app.get('/mainPage', (req, res) => {
    console.log('get /mainPage');
    res.send('get /mainPage');
});

app.listen(80);