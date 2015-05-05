var express = require('express');
var bodyParser=require('body-parser');
var app = express();
var mongoclient=require('mongodb').MongoClient
,   format=require('util').format;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var server = app.listen(8000,function () {
	console.log('server listening at port 8000');
});

app.post('/add',function (req,res) {

	mongoclient.connect('mongodb://127.0.0.1:27017/test',function(err,db){

		if(err) throw err;
		console.log("connected to database");

		var username = req.body.email;
		var password = req.body.password;

		var document={username:username,password:password};

		db.collection('record').insert(document,{_id:1}, function(err, records) {
				if (err) throw err;
					console.log("Record added as");
		});


	});

	var num1 = req.body.email;
	var num2 = req.body.password;
	res.send({'User':num1});

});
