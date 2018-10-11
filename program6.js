var myModule = require('./program_6_module');
var filepath = process.argv[2];
var extension = process.argv[3];

function myCallback(err,files) {
    if (err) {
        return console.log(err);
    }
    files.forEach(file => {
        console.log(file);
    });

}

myModule(filepath, extension, myCallback);





// 5 official solution
// var fs = require('fs')
//     var path = require('path')

//     var folder = process.argv[2]
//     var ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })