const request  = require('request')
const fs = require('fs')

var params = {
    "id": 7,
    "name": "cbwmDit1",
    "description": "ตรวจสอบวันหมดอายุคำรับรอง(สำหรับประชาชน) ระบบตรวจสอบการให้บริการงานชั่งตวงวัด กระทรวงพาณิชย์",
    "url": "http://cbwm.dit.go.th/service/CBWM_Expire.aspx"
}

const getHtmlFromUrl = (params) => {
    return new Promise((resolve, reject) => {
        options = {
            "url" : params.url,
            "content-type": "text/html",
            "charset":"windows-874"
        }
        
        request(options, function (err, res, html_body) {
            // console.log(html_body)
            resolve(html_body)
        })
    })
}

getHtmlFromUrl(params).then((html) => {
    fs.truncate('hmtlTest.html', 0, function () {
        fs.writeFile('hmtlTest', html, 'utf8');
    })
})
