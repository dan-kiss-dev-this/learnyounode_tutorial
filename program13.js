var http = require('http');
var url = require('url');
var portNumber = process.argv[2];

http.createServer(function(req, res) {
  var result;
  var urlObject = url.parse(req.url, true);
  console.log(urlObject);
  var path = urlObject.pathname;
  var startTime = urlObject.query.iso;
  result = createTimeObject(path, startTime);

  sendResult(res, result);
}).listen(portNumber);

function createTimeObject(path, time) {
  if (path.includes('unixtime')) {
    return createUnixTime(time);
  }
  return createHourMinSecObject(time);
}

function createUnixTime(time) {
  var unixTimeObject = {
    unixtime: Date.parse(time)
  };
  return unixTimeObject;
}

function createHourMinSecObject(time) {
  var date = new Date(time);
  var hourMinSecObject = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
  return hourMinSecObject;
}

function sendResult(res, result) {
  if (result) {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
}


//official solution
// var http = require('http')
//     var url = require('url')

//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }

//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }

//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result

//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }

//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))