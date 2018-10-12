let port = process.argv[2];
let http = require('http');
let fs = require('fs');
var map = require('through2-map');

const server =http.createServer((req,res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', data => {
      body +=data.toString();
    });
    req.on('end', () => {
      console.log(body);
      res.end(body.toUpperCase());
    })
  }
}).listen(port);


