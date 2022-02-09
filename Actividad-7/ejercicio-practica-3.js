const num = 12345
function revertir(x) {
var resultado = x.toString().split("").reverse().join("")
return Number(resultado)
}

revertir(num) 