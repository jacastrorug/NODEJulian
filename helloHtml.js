var http = require('http'),
	fs = require('fs');

fs.readFile('./index.html',function(err,html){
http.createServer(function(req,res){
	//res.writeHead(200,{"Context-type":"application/html"});
	//res.write(html);
	res.writeHead(200,{"Context-type":"application/html"});
	res.write(JSON.stringify({nombre:"Julian",apellido:"castro"}));

	res.end();

	}).listen(8080);
});


