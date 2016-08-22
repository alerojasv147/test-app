var connect = require('connect');
var serveStatic = require('serve-static');
var port    = parseInt(process.env.PORT, 10) || 5000;
connect().use(serveStatic(__dirname)).listen(port);