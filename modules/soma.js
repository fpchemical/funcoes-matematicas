var soma = function(a,b) {
  console.log(a,b)
  return a+b;

}

var multiplica = function(a,b) {
  var total=0; 
  console.log('multiplica', a,b)
  for(var i = 1; i<b; i++){
    total += soma(a,i)
    console.log(total)
  } 
  return total
}
console.log(multiplica(3,3))