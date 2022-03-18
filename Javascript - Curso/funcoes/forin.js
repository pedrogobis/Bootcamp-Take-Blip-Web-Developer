const person = {
    nome: 'fernando',
    idade: '30 anos',
    cidade: 'campinas'
}

person.altura = '1.70'

function chaves(obj){
    for(prop in obj){
        console.log(prop);
    }
}

function valores(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

// eu criei, concatenei as chaves para na frente aparecer os dados.
function itensjuntos(obj){
    for(prop in obj){
        console.log(`${prop} : ${obj[prop]}`);
    }
}

chaves(person);
valores(person);
itensjuntos(person);