var express = require('express');
var bodyParser=require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var server = app.listen(8000,function () {
	console.log('server listening at port 8000');
});

app.post('/add',function (req,res) {
	var num1 = parseInt(req.body.num1);
	var num2 = parseInt(req.body.num2);
	res.send({'sum':num1+num2});
});