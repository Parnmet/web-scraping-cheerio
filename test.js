const cheerio = require('cheerio')
const $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>')
// const $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul><ul id="fruits2"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>')


// $('h2.title').text('Hello there!')
// $('h2').addClass('welcome')

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

console.log($('li.apple').prev().text())

$('.apple', '#fruits').text()
//=> Apple

$('ul .pear').attr('class')
//=> pear

$('li[class=orange]').html()
//=> Orange