const path = require('path');
const express = require('express');

const app = express();

const port = 8888;

app.listen(port, () => console.log('Listening port: ' + port));

app.use('/assets/', express.static(path.join(__dirname, '/public/')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});
