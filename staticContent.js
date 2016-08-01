var fs = require('fs');


var staticProcess = function staticProcess(request, response) {

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

exports.staticProcess = staticProcess;

 