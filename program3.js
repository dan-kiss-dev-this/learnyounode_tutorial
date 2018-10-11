var fs = require('fs');
// console.log(process.argv);
let buffer_object = fs.readFileSync(process.argv[2]);
// console.log(buffer_object);
let string = buffer_object.toString();
let string_split_by_line = string.split('\n');
let total = string_split_by_line.length-1;
console.log(total);

// official solution
// var fs = require('fs')
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

