var m = 1
var a=  2
var fim = 4
var inicial = 3
var q = 5
var t = 6
var x = {value:3, unidadeMedida: 'joule/mol'}
var y = {value:4, unidadeMedida: 'joule/mol'}
var z = {value:5, unidadeMedida: 'joule/mol'}
var w = {value:7, unidadeMedida: 'joule/mol'}
var T = 280
var n = 0.1
var V = 2
var R = 0.0820574587

var deltaH = require('./modules/energia')(x,y,z,w)
var f = require('./modules/forca')(m, a)
var deltaX = require('./modules/deltaX')(inicial,fim)
var trabalho = require('./modules/trabalho')(f, deltaX)
var variacaoenergia = require('./modules/variacaoenergia')(q,trabalho)
var variacaoentropia = require('./modules/variacaoentropia')(q,t)
var variacaoEntropiaPcte = require('./modules/variacaoEntropiaPcte')(deltaH,t)
var gasIdealPressao = require('./modules/gasIdealPressao')(V,n,R,T) 

console.log('f', f);
console.log('trabalho', trabalho);
console.log('variacaoenergia', variacaoenergia);
console.log('variacaoentropia', variacaoentropia);
console.log('variacaoEntropiaPcte', variacaoEntropiaPcte);
console.log('deltaH', deltaH);
console.log('gasIdealPressao', gasIdealPressao);


// const BuscaConstantePorSimbolo = require('./modules/grandezasFisicoQuimica');
// const buscaConstante = BuscaConstantePorSimbolo()

// console.log('h', buscaConstante('h'))



