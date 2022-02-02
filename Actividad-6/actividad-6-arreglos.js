// PArte 1 de la actividad
var animals = ["eagle", "parrot", "monkey", "boar", "lion"]
var comingSoonAnimals = ["panter", "dragon", "turtle"]
var zoo = animals.concat(comingSoonAnimals);
console.log(zoo)


// Parte dos

var arr = [4, 6, 1, 0, 8, 2]
arr.sort(function(a, b){return a-b})
console.log(arr)

//Parte 3

animals.push("cow")
console.log(animals)

//parte 4

animals.shift()
console.log(animals)