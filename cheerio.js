//Cheerio web scraping v1.0 support input with value, select, button with value (addtional option also not add)
const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs');
var iconv = require('iconv-lite');

var json = require('./ConnectorWebScrapingJson.json')
json.webScraping.forEach((elem) => {
    generateJson(elem)
})

function generateJson(params) {
    const getHtmlFromUrl = () => {
        return new Promise((resolve, reject) => {
            options = {
                "url": params.url,
                "encoding": null
            }
            request(options, function (err, res, htmlBody) {
                if (params.charset != "utf-8") {
                    resolve(iconv.decode(htmlBody, params.charset))
                }
                else {
                    resolve(htmlBody)
                }
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
            $('[name="' + select_name + '"]').children().each((j, elem) => {
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
        fs.truncate('./htmlScraped/' + params.name + '.json', 0, function () {
            fs.writeFile('./htmlScraped/' + params.name + '.json', json, 'utf8');
        })
    })
}

