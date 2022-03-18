let person ={
    name: 'fernando',
    age: '33'
}

// adicionei item dentro do dicionario/objeto.
person.altura = '1.89';

//alterei a idade dentro do objeto
person.age = '35'

console.log(person)

console.log(person.name)
console.log(person)





// valores dentro do objeto
console.log(Object.values(person))
//chaves dos objetos
console.log(Object.keys(person))

// acessando uma informação
console.log(person.name)

// adicionando uma variavel como uma chave dentro de um objeto.
let mae = 'nome da mae';
person[mae] = 'Marta';

console.log(person);
