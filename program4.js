// let new_lines = data[0].toString().split('/n').length-1;

var fs = require('fs');

function countNewlinesAsync(pathToFile) {
    fs.readFile(pathToFile, readAndCount);
}

function readAndCount (error,data) {
    if (error) {
        return console.log('error',error);
    }
    var count = data.toString().split('\n').length - 1;
    console.log(count);
}

countNewlinesAsync(process.argv[2]);

// 4 official solution
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
    if (err) {
    return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
});
