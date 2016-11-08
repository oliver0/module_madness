var randomNumber = require('./random-number');
var toString = require('./stringify.js');

function result(){
  return toString(randomNumber(100,1000000))
}
function accountText(){
  return "Account balance: \n";
}


module.exports.createDollars = result;
module.exports.accountText = accountText;

//console.log(module.exports.accountText);
