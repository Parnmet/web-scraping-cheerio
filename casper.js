var links = [];
var casper = require('casper').create();
var raw_value = require('./myjsonfile.json')

var type_list = []
var position_list = []
var value_list = []
function getValue() {
    raw_value.query_string.forEach(function(element) {
        type_list.push(element.type)
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
}

var host = 'http://organic.doa.go.th/login/report_search'

//fill(String selector, Object values[, Boolean submit])
casper.start(host, function () {
    // Wait for the page to be loaded
    getValue()
    this.waitForSelector('input[name="start"]');
});


casper.then(function () {
    for (i = 0; i < position_list.length; i++) {
        // search for 'casperjs' from google form
        var query_object = {}
        console.log('fill ', position_list[i], ' with ', value_list[i])
        name = position_list[i]
        query_object[name] = value_list[i]
        this.fill('form', query_object, true);
    }
    casper.capture('navigation.png');
});


// casper.wait(1000, function(){
//     casper.capture('navigation.png');
// })
casper.run();
