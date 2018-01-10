var express = require('express'),
	fs = require('fs');

var app = express();

app.get("/",function(req,res){
	res.send("Holaa");
	res.send("Holaa")
	res.end("Hola");
});


fs.readFile('./index.html',function(err,html){
	app.get("/prueba",function(req,res){
		res.write(html);
		res.end();
	});
});



app.listen(8080);