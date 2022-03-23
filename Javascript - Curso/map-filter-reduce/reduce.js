// vou criar um array automatico com loop para fixar.

let a = 0;
let num = [];
const num2 = [1,2,3];

while(a <= 69){
    a++;
    num.push(a);
}

//verificar
//console.log(num) deu certo.

function somaNumeros(arr){
    return arr.reduce((prev, current) => {
        // mostrando valor por valor e somando.
        console.log({prev});
        console.log({current});
        return prev+ current;
    } )
}

console.log(somaNumeros(num))
console.log(somaNumeros(num2))