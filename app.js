var express = require('express')
var cheerio = require('./myjsonfile.json')
var app = express()


var name_list = []
function prepareValue(){
    cheerio.query_string.forEach(element => {
        name_list.push(element.name)
    });
}
prepareValue()
console.log(name_list)

// GET method route
app.get('/cheerio', function (req, res) {
    console.log(req.query)
    res.send("Use name as a query string and its value as a query string' value")
})

// POST method route
app.listen(3000, () => console.log('Example app listening on port 3000!'))