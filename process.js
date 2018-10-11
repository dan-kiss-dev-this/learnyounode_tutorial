// console.log(process.argv);

let my_array = process.argv;
let total = 0;
let length = process.argv.length;

for (let index = 2; index < length; index++) {
    // console.log(Number(my_array[index]));
    total += Number(my_array[index]); 
    // console.log(total);
}
console.log(total);
return total;

// official solution below

// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)


