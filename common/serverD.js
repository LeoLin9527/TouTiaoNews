const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const func = require('./as_cp');
const gsign = require('./signature');

app.use(bodyParser());
app.listen(8000, () => console.log('service start...'));

app.get('/', (req, res) => {
    // var params = req.params;
    // pwd = params.pwd;
    result = func.getHoney();
    // console.info(pwd)
    res.send(result)
});

app.post('/sign', (req, res) => {
    var data = req.body;
    var ua = data.ua;
    var btime = data.btime;
    var result = gsign.get_signature(btime,ua);
    res.send(result)
});