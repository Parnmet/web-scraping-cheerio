const cheerio = require('cheerio')
const cheerioTableparser = require('cheerio-tableparser');
const fs = require('fs');
var filePath = 'html_result_table/test.html' 
$ = cheerio.load(fs.readFileSync(filePath));
cheerioTableparser($);
//For html file.
var data = $('table.table').parsetable(true, true, true);

fs.writeFile("test/test.csv", data, 'utf-8', function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 