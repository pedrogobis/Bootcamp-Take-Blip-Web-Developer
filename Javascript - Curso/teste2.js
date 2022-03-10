let a1 = ['Pedro é lindo', 13, true,['fernando',13], [1997,'marta']];

// console.log(a1[4]);
// VISUAL CODE LINOD :passando a mão em cima da função ela mostra toda a explicação sobre a função e como utilizar 
/*
Para usarmos as funções do array em js, colocamos a variavel.função
neste caso estamos usando o foreach, ele por si só já é uma função, então 
precisamos passar parametros, colocamos uma função dentro dele, que recebe os parametros,
abrimos os colchetes e colocamos o que vai ser executado, neste caso, console.log, e passamos
os dados a serem mostrados, nesse caso vai mostrar os itens e o index de cada item no a1, que é nosso array 
declarado lá em cima.
*/
// a1.forEach(function(item, index){console.log(item,index)})

/*
Push = adiciona item ao final

*/
//a1.push('marcos');

/*
pop() - igual no python, remove o ultimo item
*/
//a1.pop();
/*
shift() - remove item no começo do array.

*/
//a1.shift();

/**
 unshift()- adiciona no inicio do array
 */

 //a1.unshift('SOSK');

/**
 * index() - retorna o indece do item;
 *  esse no caso faz uma busca no array para saber o indice de um item, no caso eu sabia
 * que no array continha o valor true, então inseri dentro de um console.log com a a1 selecionada
 * e dentro de indexof coloquei o item, assim ele printou na tela o indece do item.
 
console.log(a1.indexOf(13))
console.log(a1.indexOf('Pedro é lindo'))
console.log(a1.indexOf([]))// se o valor n for encontrado dentro, ele retorna como index -1
console.log(a1.indexOf(true))
*/
/*
splice() - remove ou subistitu um item pelo index.
a1.splice(0,3) removeu do indece 0 até o 3 e tornou o 4 o primeiro
a1.splice(0,3, 'pedro', 'marta', 'lidiane'); removeu os indices do 0 ao 3 e adicionou os inseridos no começo
*/
//a1.splice(2,4,'fernanda', 'claudia','marta','lidiane', 'patricia');
//console.log(a1);  
/*
slice()
 retirba yna oarte de um array existente

 let a2 = a1.slice(0,3);
console.log(a2);

mostrou só os indices no range que eu defini.

poderia ter feito desta forma também
console.log(a1.slice(0,3))
*/


//objeto
let xicara ={
    cor:'branca e verde',
    tamanho:'M',
    Boolean: true,
    array: ['feito em casa'],
    cafe: {
        tipo: '1',
        temp: 'quente'
    }
};

console.log(xicara.cafe.temp);

// desconstruindo o objeto para poder manipula-lo


//vendo os dados internos
var string = xicara.cor;

console.log(string)

var array = xicara.array;

console.log(array);

// outro metodo de desestruturar, achei até melhor
var {cor, tamanho, cafe} = xicara;

console.log(cor, tamanho, cafe);
