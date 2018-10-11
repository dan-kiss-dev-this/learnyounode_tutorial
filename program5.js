var fs = require('fs');
var folder = process.argv[2];
var file_extension = process.argv[3];

function list_my_files(path, callbackhere) {
    fs.readdir(path, 'utf8',callbackhere)
}

function callback(err, files) {
    if (err) {
        console.log('error:', err)
    }
    files.forEach(file => {
        fileExtension = file.split('.')[1];
        if (fileExtension === file_extension) {
            console.log(file);
        }
    });
}

list_my_files(folder,callback);


// 5 official solution
var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })