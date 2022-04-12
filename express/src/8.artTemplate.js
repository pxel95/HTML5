const expressArt = require('express-art-template');
const express = require('express');
const app = express();


app.engine('art', expressArt);
//默认为views目录下
app.set('views', './');
app.set('view engine', 'art');

app.get('/', (req, res) => {
    //res.render('index.art', { msg: '123' });
    res.render('index', { msg: 'use default ext' });
});

//模版引擎使用app的locals对象读取数据
app.locals.users = [{ name: 'zhangsan', age: 18 }, { name: 'lisi', age: 20 }];
app.locals.fnDouble = function(age) { return age * 2; }; //之前写了关键字double作为变量名，导致模版调用函数失败

//通过原有的模版配置传递函数
expressArt.template.defaults.imports.fnTrible = function(age) { return age * 3; };

app.get('/users', (req, res) => {
    //@1 如果为模块传递了参数，那么模版优先查找参数中是否有users，如果没有再去locals下查找
    res.render('user.art', { users: [{ name: '张三', age: 18 }, { name: '李四', age: 20 }] });
    //@2 模版可直接访问app下locals对象的数据
    //res.render('user.art');
});

app.listen(80);