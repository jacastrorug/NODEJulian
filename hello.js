var http = require("http");

var manejador = function(solicitud, respuesta){
	respuesta.end("Ey");
}

var servidor = http.createServer(manejador);

servidor.listen(8080);