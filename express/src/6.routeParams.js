const express = require('express');
const app = express();

//http://localhost/123      ok
//http://localhost/123/abc  error,完全匹配
app.get('/:id', (req, res) => {
    console.log(req.params); //id=123
    res.send(req.params);
});

app.listen(80);