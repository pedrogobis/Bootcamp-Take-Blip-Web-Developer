const palavra = 'MARRETA';
const numeros = [3, 51, 43, 98, 34, 73, 22];
const num1 = 2312;

function logletras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

function logNum(numeros){
    for(nume of numeros){
        console.log(nume);
    }
}
// essa n rolou, devo tentar com slice talvez.
function teste(teste){
    for(let u = 0; u <= teste.length; u++){
        for(u in teste){
        console.log(u);
    }
}
}

//certo
logletras(palavra);
//logletras('monitor')

//certo
//logNum(numeros);
 
// esta mostrando os indices da palavra
