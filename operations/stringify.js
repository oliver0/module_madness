function toString(number){
  return number.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + '\n';
}

module.exports = toString;
