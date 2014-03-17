var http = require('http');
var url = require('url');

var host = '127.0.0.1';
var port = 8000;

function start(route, handle) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;

        route(handle, pathName, response, request);
    }

    http.createServer(onRequest).listen(port, host);
    console.log('nodKA running at ' + host + ':' + port);
}

exports.start = start;