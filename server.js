var history = require('connect-history-api-fallback')
var express = require('express');
var serveStatic = require('serve-static');
var port = process.env.PORT || 5000;
app = express().use(serveStatic(__dirname + "/dist"))
        .use(history())
        .listen(port);
console.log('server started '+ port);