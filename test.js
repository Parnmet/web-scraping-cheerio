const cheerio = require('cheerio')
const $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>')
// const $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul><ul id="fruits2"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>')


console.log($('.apple')[0].name)
// $.html()
// //=> <h2 class="title welcome">Hello there!</h2>
// console.log($('h2').text())

/* 
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul> 
<ul id="fruits2">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul> 
<ul id="fruits2"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul> 
*/

// $('li').parents().each((i,elem) => {
//   console.log('i ',i)
//   console.log('elem ', $(this).attr('id'))
// })

// console.log($('li.apple').prev().text())

$('.apple', '#fruits').text()
//=> Apple

$('ul .pear').attr('class')
//=> pear

$('li[class=orange]').html()
//=> Orange

// const cheerio = require('cheerio')
// var fs = require('fs');
// const $ = cheerio.load(fs.readFileSync('html/ID6-ORGANICDOA.html'))

// //Iterate select name
// const select_name_list = []
// const result = {}
// $('select').each((i, elem) => {
//     select_name_list[i] = $(elem).attr('name')

//     //Iterate option and value
//     const select_option_value_list = []
//     $('[name='+ +']').children().each((i, elem) => {
//         select_option_value_list[i] = $(elem).text()
//         select_option_value_list[i] = $(elem).val()
//     })
//     select_option_value_list.join(', ')
//     console.log(select_option_value_list)

//     //Iterate whole options' text
//     const select_option_text_list = [];
//     $('[name='+ +']').children().each((i, elem) => {
//         select_option_text_list[i] = $(elem).text();
//     });
//     select_option_text_list.join(', ')
//     console.log(select_option_text_list)
// })
// select_name_list.join(', ')
// console.log(select_name_list)
