var firstName = 'Marcos Jacinto'
var lastName = 'Souza'

console.log(firstName[4],firstName[3], lastName[4], lastName[1]);


// split corta tudo, com o parametro zerado, então vai fatiar letra por letra dentro de um array
console.log(lastName.split(""));

// com esse parametro dividiu pelo espaçamento
console.log(firstName.split(" "));

// pelo c
console.log(firstName.split("c"));

// vai retornar um valor booleano se dentro de first name tem os
console.log(firstName.includes('os'));

// Retorna booleano se começa com p
console.log(firstName.startsWith('P'));
// se terminar com o, vai retornar um booleano

console.log(firstName.endsWith('o'));