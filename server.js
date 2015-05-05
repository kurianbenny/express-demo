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
	// var num1 = parseInt(req.body.user);
	// var num2 = parseInt(req.body.pwd);
	var num1 = req.body.user;
	var num2 = req.body.pwd;
	res.send({'User':num1});
	
});