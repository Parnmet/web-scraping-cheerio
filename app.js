const cheerio = require('cheerio')
var fs = require('fs');
const $ = cheerio.load(fs.readFileSync('html/ID6-ORGANICDOA.html'))

//Iterate select name
// const parent_list = []
// $('select').each((i, elem) => {
//     parent_list[i] = $(elem).attr('name')
// })
// parent_list.join(', ')
// console.log(parent_list)

//Iterate option and value
const parent_list = []
const parent_value_list = []
$('[name=status_garden]').children().each((i, elem) => {
    parent_list[i] = $(elem).text()
    parent_value_list[i] = $(elem).val()
})
parent_list.join(', ')
console.log(parent_value_list)

/*
//Iterate whole options' text
const option_list = [];
$('option').each(function(i, elem) {
    option_list[i] = $(this).text();
});
option_list.join(', ')

//Iterate whole options' value 
const value_list = []
$('option').each(function(i, elem) {
    value_list[i] = $(this).attr('value')
});
value_list.join(', ')
*/

// console.log(a)