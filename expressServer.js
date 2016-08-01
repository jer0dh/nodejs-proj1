var express = require('express');
var app = express();

app.use('/static', express.static('static'));
app.get('/', (q,r) => {
	r.end('Hello from express');
});


app.listen(3000,'127.0.0.1', () => {
	console.log('Listening on 3000 on localhost');
});
