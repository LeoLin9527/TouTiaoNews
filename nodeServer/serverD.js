const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const func = require('./as_cp');
const gsign = require('./signature');

app.use(bodyParser());
app.listen(8000, () => console.log('service start...'));

app.get('/', (req, res) => {
    result = func.getHoney();
    res.send(result)
});

app.post('/sign', (req, res) => {
    var data = req.body;
    var ua = data.ua;
    var durl = data.durl;
    var a = {url: durl};
    var result = gsign.get_signature(ua,a);
    res.send(result)
});