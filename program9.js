// let firstUrl = process.argv[2];
// let secondUrl = process.argv[3];
// let thirdUrl = process.argv[4];
// var bl = require('bl');
// var http = require('http');
// var urlArray = [firstUrl,secondUrl,thirdUrl];
// var results = [];
// var count =0;
// let results_object = {};

// function requestData(urlArray) {
//     urlArray.forEach((url, index) => {
//         http.get(url, callback);
//     });
// }

// function callback(response) {
//     response.pipe(bl(callback2));
// }

// function callback2(error, data) {
//     //issue was could not access index here, not certain though as mention index declared but value never read
//     results[index] = data.toString();
//     count++;

//     if(count === urlArray.length) {
//         printResults();
//     }
// }

// function printResults() {
//     results.forEach(element => {
//         console.log(element);
//     });
// }

// requestData(urlArray);


//other solution
let firstUrl = process.argv[2];
let secondUrl = process.argv[3];
let thirdUrl = process.argv[4];
var bl = require('bl');
var http = require('http');
var urlArray = [firstUrl,secondUrl,thirdUrl];
var results = [];
var count =0;
let results_object = {};

function requestData(urlArray) {
    urlArray.forEach((url, index) => {
        http.get(url, function(response) {
            response.pipe(bl(function(err, data) {
                results[index] = data.toString();
                count++;
                if (count === urlArray.length) {
                    printResults();
                }
            }));
            response.on('error', console.error);
        }).on('error', console.error);
    });
}

function printResults() {
    results.forEach(function(result) {
        console.log(result);
    });
}

requestData(urlArray);
