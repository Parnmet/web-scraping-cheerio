var links = [];
var casper = require('casper').create();

function getText() {
    var text = document.querySelector('h4.text-center');
    return 
    });
}

casper.start('http://google.fr/', function() {
//    // Wait for the page to be loaded
   this.waitForSelector('form[action="/search"]');

   console.log(document.querySelectorAll('h4.text-center'))
});

casper.evaluate(function() {
    console.log(document.querySelectorAll('h4.text-center'))
});

