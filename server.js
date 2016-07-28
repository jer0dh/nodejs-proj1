var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	console.log(`Incoming request url: ${request.url}`);
	debugger;
	if (request.url.startsWith('/static/')) {
		fs.readFile(request.url.substr(1), (error, data) => {
			if(error){
				console.log('Error file not found: ' + error);
				response.statusCode = 404;
				response.end();
				return;
			}
			response.end(data);
			
		});
		return;
	}
	response.end('Hello World');
}).listen(3000, '127.0.0.1', () => { 
	console.log('The server is listening on 3000');
});
/* testing */
