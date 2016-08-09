var express = require('express');
var app = express();
var list = require('./data/data.json');


app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));

app.get('/', (q,r) => {
	r.render('index.jade');
});

app.get('/list', (q,r) => {
	r.render('list.jade', {list: list} );
});


app.listen(3000,'127.0.0.1', () => {
	console.log('Listening on 3000 on localhost');
});
