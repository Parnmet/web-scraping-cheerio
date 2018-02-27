//Cheerio web scraping v1.0 support input with value, select, button with value
const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs');

//For html file.
// var fs = require('fs');
// fileName = 'html/ID6-ORGANICDOA.html'
// const $ = cheerio.load(fs.readFileSync('html/ID6-ORGANICDOA.html'))

const getHtmlFromUrl = () => {
    return new Promise((resolve, reject) => {
        url = 'http://organic.doa.go.th/login/report_search'
        request(url, function (err, res, html_body) {
            resolve(html_body)
        })
    })
}

getHtmlFromUrl().then((html) => {
    const $ = cheerio.load(html)

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

    //Iterate select
    let select_list = []
    $('select').each((i, elem) => {
        let select_object = {}
        select_name = $(elem).attr('name')
        select_object.name = select_name
        select_object.type = 'select'
        select_list.push(select_object)

        //Iterate option and value
        let option_list = []
        $('[name=' + select_name + ']').children().each((j, elem) => {
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

    //Iterate submit
    let submit_list = []
    $('button[value]').each((i, elem) => {
        let submit_object = {}
        submit_object.name = $(elem).attr('name')
        submit_object.type = 'submit'
        submit_object.text = $(elem).text().replace(/\n| /g, '')
        submit_object.value = $(elem)[0].attribs.value //Don't know why!
        submit_list.push(submit_object)
    })

    result.query_string = input_list.concat(select_list)
    result.submit = submit_list

    var json = JSON.stringify(result);
    fs.truncate('./html_scraped/' + 'test' + '.json', 0, function () {
        fs.writeFile('./html_scraped/' + 'test' + '.json', json, 'utf8');
    })

})

