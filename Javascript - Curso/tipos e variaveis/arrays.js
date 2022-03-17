// Indice sempre no 0

let numeros = [];
let num = 40


//adc no ultimo
numeros.push(13);
numeros.push(3);

console.log(numeros)

// criei um for para adicionar itens dentro do array de numeros.
for(let j = 0; j <= num; j++){
    numeros.push(j)
}

//printando todos os numeros dentro do array numeros em uma linha cada
for(let i = 0; i <= numeros.length; i++){
    console.log(numeros[i])
}

// qtde de numeros dentro de numeros.
console.log(numeros.length)