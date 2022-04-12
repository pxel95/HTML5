const express = require('express');
const app = express();
const fs = require('fs');
const promisify = require('util').promisify;
//包装
const readFile = promisify(fs.readFile);

app.get('/', async(req, res, next) => {
    //如果不捕获，那么服务器会崩溃
    try {
        //异步代码同步化
        await readFile('notfound.txt');
    } catch (e) {
        console.log(e);
        next(e);
    }
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

app.listen(80);