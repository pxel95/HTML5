const path = require('path');
const express = require('express');
const app = express();

//res为需要处理目录，可以不存在，因为是在Request URL中指定的，服务器只要指定对应的实际目录即可
//static函数中的目录./为资源的实际目录
//这样，浏览器访问res目录时的资源时，服务器会自动返回./目录下的对应资源，否则交给下一个中间件处理
app.use('/res', express.static('./'));

//使用绝对路径
//app.use('/res', express.static(path.join(__dirname, 'public')));

//路由所有目录下的静态资源
//app.use(express.static('./'));

app.listen(80);