let port = process.argv[2];
let fileToServe = process.argv[3];
let http = require('http');
let fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {'content-type': 'text/plain' });
  fs.createReadStream(fileToServe).pipe(response);
}).listen(port);

//alternate solution below

// var server = http.createServer(callbackMakeServer).listen(port);

// function callbackMakeServer (request, response) {
//   response.writeHead(200, { 'content-type' : 'text/plain' });
//   fs.createReadStream(fileToServe).pipe(response)
// }