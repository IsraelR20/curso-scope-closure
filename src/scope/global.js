// variables
var a; //declarando 
var b = 'b' // declaramos y asignamos
b = 'bb'; //reasignar un valor 
var a = 'aa'; // redeclaración


//Global Scope
var fruit = 'apple'; // global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}
bestFruit();


function countries(){
    country="Colombia"; //asignar
    console.log(country);
}
countries();
console.log(country);