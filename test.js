var request = require("request");

var options = { method: 'GET',
  url: 'http://cbwm.dit.go.th/service/CBWM_Expire.aspx',
  headers: 
   { 'Postman-Token': '6f5b0c59-873f-4c15-bc1e-c87a3658cf7c',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
