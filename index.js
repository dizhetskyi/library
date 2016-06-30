var config = require('./server/config/config');
var app = require('./server/server');

app.listen(config.port);
console.log('listening on http://localhost:' + config.port);