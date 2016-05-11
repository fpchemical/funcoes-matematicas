var testelogico = function(){
    var args = [];
    for (var i = 0; i < arguments.length; i++)
        args[i] = arguments[i];
    var pares = args.filter(i => !(i%2)).map(i => i*i).reduce((a,b) => a+b)
    return pares
}

console.log(testelogico(7,4,5, 8,12))

