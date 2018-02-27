var raw_value = require('./myjsonfile.json')

var position_list = []
var value_list = []
raw_value.query_string.forEach(element => {
    position_list.push(element.name)
    if (element.hasOwnProperty('option')) {
        if (element.option[1] == undefined) {
            value_list.push(element.option[0].value)
        }
        else {
            value_list.push(element.option[1].value)
        }
    }
    else {
        value_list.push(element.value)
    }
});

console.log(position_list)
console.log(value_list)