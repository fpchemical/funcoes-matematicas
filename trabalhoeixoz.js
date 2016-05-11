var deltaX = function (a,b) {return (b - a)}

var trabalho = function (f,deltaX){
  return (f*deltaX)
}
var forca = function (m,a) {
  return (m*a)
}

var m = 2
var a = 2
var fim = 4
var inicial = 3
trabalho(forca(m,a), deltaX(inicial,fim))

