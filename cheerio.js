const cheerio = require('cheerio')
var fs = require('fs');
const $ = cheerio.load(fs.readFileSync('html/ID6-ORGANICDOA.html'))

//Iterate select name
let result = {}

//Iterate input
let input_list = []
$('input[value]').each((i, elem) => { 
    let input_object = {}
    input_object.name = $(elem).attr('name')
    input_object.type = 'input'
    input_object.text = $(elem).attr('name')
    input_object.value = $(elem).val()
    input_list.push(input_object)
})

let select_list = []
$('select').each((i, elem) => {
    let select_object = {}
    select_name = $(elem).attr('name')
    select_object.name = select_name
    select_object.type = 'select'
    select_list.push(select_object)

    //Iterate option and value
    let option_list = []
    $('[name='+ select_name +']').children().each((j, elem) => {
        if ($(elem)[0].name == 'optgroup') {
            $(elem).children().each((k, elem2) => {
                let option_object = {}
                option_object.text = $(elem2).text().replace(/\n| /g, '')
                option_object.value = $(elem2).val()
                option_list.push(option_object)
            })
        }
        else {
            let option_object = {}
            option_object.text = $(elem).text().replace(/\n| /g, '')
            option_object.value = $(elem).val()
            option_list.push(option_object)
        }
    })
    select_object.option = option_list
    select_list[i] = select_object
})
result.query_string = input_list.concat(select_list)

var json = JSON.stringify(result);
var fs = require('fs');
fs.truncate('myjsonfile.json', 0, function() {
    fs.writeFile('myjsonfile.json', json, 'utf8');
})



