// meu codigo funcionou, com menos linha ainda, mas vou fazer igual o ex da aula.


function par(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
       if(array[i] === 0){
            console.log("voce já é zero!")    
       }else if(array[i] % 2 === 0){
           console.log(`Subistituindo ${array[i]} por 0...`)
           // ela não usou o metodo splice, ela apenas re-atribuiu o valor
           array[i] = 0;
       }
    }
    console.log(array)
}

var numeros = [
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9,
   10
 ]

var p = 'marta'
console.log(par());
