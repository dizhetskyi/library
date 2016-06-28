var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 3235;

app.listen(port, () => {
  console.log(`app listening on http://localhost:%s`, port);
})

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/app.html'))
})