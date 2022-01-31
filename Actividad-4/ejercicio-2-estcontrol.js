var num1 = parseInt(prompt("Ingrese un número entre 1 y 50"))
var num2 = parseInt(prompt("Ingrese un segundo número entre 1 y 50"))
var index = 0
while(index < 50){
    if(index == num1 || index == num2){
        console.log("loteria")
    } else {
        console.log(index)
    }
    index++
}