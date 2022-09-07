var express = require('express');
var port = process.env.PORT || 3001;
var app = express(),
	path = require('path'),
	publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));

app.listen(port, () => console.log(`Express demo listening on port ${port}!`));
module.exports = app;
