var combine = require('./operations/combine');
var http = require('http');


var accountText = combine.accountText;
var dollars = combine.createDollars;


http.createServer(function(req, res){
  res.writeHead(200);
  res.write(accountText() + dollars());
  res.end();
}).listen(3000);
