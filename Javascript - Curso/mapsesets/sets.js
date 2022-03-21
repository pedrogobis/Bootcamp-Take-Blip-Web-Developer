const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

        //spread os tres pontos, signfica que o myset vai ser colocado dentro de array
    return [...mySet];
}
console.log(valoresUnicos(meuArray))