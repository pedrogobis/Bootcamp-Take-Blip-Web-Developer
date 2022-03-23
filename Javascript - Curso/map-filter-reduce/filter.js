const carros = ['fiat strada', 'fiat uno', 'fiat palio', 'fiat pulse', 'vw gol', 'vw saveiro', 'vw fusca', 'vw nivus', 'gm corsa pickup', 'gm corsa sedan', 'gm corsa hatch', 'gm tracker']

console.log(carros)

console.log('Filtrando carros da marca FIAT ', carros.filter((fiat) => fiat.includes('fiat')));
console.log('Filtrando carros da marca VW ', carros.filter((vw) => vw.includes('vw')));
console.log('Filtrando carros da marca CHEVROLET', carros.filter((gm) => gm.includes('gm')));

// apenas por frescura criei um array com um loop de 10 numeros.
let num = [];
let a = 0;
while(a < 19){
    
    a++;
    num.push(a);
    //retorna todos os numeros até ela.
}

function filtraPares(arr){
    return arr.filter(callBack1)
}

//vai fazer a callback(outra funcao) fora da funcao
function callBack1(item){
    return item % 2 === 0;
}

// dessa vez eu fiz com arrow function
function filtraImpares(arr){
    return arr.filter((item)=> item % 2 !==0);
}


console.log(filtraPares(num));
console.log(filtraImpares(num));