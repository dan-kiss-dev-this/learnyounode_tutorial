let url = process.argv[2];
var http = require('http');
var bl = require('bl'); //via npm install bl - used to manage buffer lis, node will automatically look in core modules then node_modules for your

http.get(url, callback);

function callback (response) {
    response.pipe(bl(callback2));
}

function callback2(error, data) {
    if (error) {
        console.log(error);
    }
    console.log(data.toString().length);
    console.log(data.toString());
}




