var http = require('http');
var server = http.createServer(engine);
server.listen(1337, function(){
	console.log("Server was hit by a request");
});

// server.createServer(engine).listen(1337); // leets

function engine(request, response) {
	// body...
	//console.log(response);
	response.writeHead(200, {'Content-Type': 'text/plain'});

	response.end('Hey there, from the server! :D. Request from page: ' + request.url);
}