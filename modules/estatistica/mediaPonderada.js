module.exports = function (arr) {
  var total =  arr.reduce((x,y) => x+y);
  return total/arr.length
}
