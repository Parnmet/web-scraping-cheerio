const cheerio = require('cheerio')
// const $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>')
// const $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul><ul id="fruits2"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>')
var fs = require('fs');
const $ = cheerio.load(fs.readFileSync('html/ID6-ORGANICDOA.html'))


console.log($('button[value=sum]'))