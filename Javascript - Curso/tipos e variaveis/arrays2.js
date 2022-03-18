let numeros = [];
let num = 10;

console.log(numeros)

for(let i = 0; i <= num; i++){
    numeros.push(i)
}

console.log(numeros)

//console.log(numeros.splice(3,1,'fernanda'))

//console.log(numeros)

// até aqui, criei um array com os 10 intens dentro dela.
// agora precisamos verificar qual é par e qual não é par.

function verifica(array){
    if(!array) return 'erro, insira uma array';

    for(let i = 0; i <= array.length; i++){
        if(array[i]%2 == 0){
            array.splice(i,1,0)
        }
    }
    console.log(array)
}

console.log(verifica(numeros))