var http = require('http');
var fs = require('fs');
var static = require('./staticContent.js');

http.createServer(function(request, response) {
	console.log(`Incoming request url: ${request.url}`);
	debugger;
	if (request.url.startsWith('/static/')) {
	static.staticProcess(request, response);
	return; 

	}
	response.end('Hello World');
}).listen(3000, '127.0.0.1', () => { 
	console.log('The server is listening on 3000');
});
