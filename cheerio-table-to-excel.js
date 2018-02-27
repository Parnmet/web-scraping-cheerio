const cheerio = require('cheerio')
const cheerioTableparser = require('cheerio-tableparser');
const fs = require('fs');
var filePath = 'html_result_table/test.html' 
$ = cheerio.load(fs.readFileSync(filePath));
// cheerioTableparser($);
// //For html file.
// var data = $('table.table').parsetable(true, true, true);
// console.log(data)

// var csv = require('fast-csv')
// var ws = fs.createWriteStream('my2.csv')
// csv.write(data, {
//     headers: true,
//     transform: (function(data) {
//         return data.reverse(); //reverse each row. 
//     })
// }).pipe(ws)
var tableToJSON = require('tableToJSON')
var a = $('table').tableToJSON()
console.log(a)