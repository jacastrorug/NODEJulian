var http = require('http'),
	fs = require('fs');

fs.readFile('./index.html',function(err,html){
http.createServer(function(req,res){
	//res.writeHead(200,{"Context-type":"application/html"});
	//res.write(html);

	var htmlString = html.toString();

	var variables = htmlString.match((/[^\{\}]+(?=\})/g));
	var nombre = "Julian";
	var apellido = "Castro"
	for (var i = 0; i < variables.length; i++) {
		var value = eval(variables[i]);
		htmlString = htmlString.replace("{"+variables[i]+"}",value);
	}

	res.writeHead(200,{"Context-type":"text/html"});
	res.write(htmlString);

	res.end();

	}).listen(8080);
});