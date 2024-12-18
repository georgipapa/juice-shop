"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
// Create an HTTP server
var server = (0, http_1.createServer)(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('EGW GIA TIN PITSA IRTHA!\n');
});
// Start the server on port 3000
server.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});
