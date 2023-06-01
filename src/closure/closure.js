function greeting(){
    let username="Oscar";

    function displayUserName(){
        return `Hola ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); //retorna la definición de la función
console.log(g()); //entrega el valor