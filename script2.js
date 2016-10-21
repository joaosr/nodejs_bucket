var server = require('http');

server.createServer(engine).listen(1337);

function engine(request, response) {
	// body...
	response.writeHead(200, {'Content-Type': 'text/plain'});

	response.end('Hey there, from the server! :D');
}