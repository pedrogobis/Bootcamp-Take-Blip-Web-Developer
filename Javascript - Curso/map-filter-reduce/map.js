const lista = [1,2,3,4,5,6,7,8]

console.log(lista.map((item) => item * 2));


lista.map((item) => item *2);






const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.forEach(function(nome, i) {
    console.log(nome, i);
})

//criou objetos
const maca = {
    value: 2,
}

const laranja ={
    value: 8,
}


// criou uma funcao classica sem usar o funciton arrow igual nos exemplos.
// nesse exemplo ela vai usar o thisArgs.
// ela praticamente está inserindo dois valores juntos, um vai ser um array e o outro um objeto.
function mapComThis(arr, thisArg={value:15}){
    /*
    Pegou o item dentro do array, e pra cada item, vai fazer * o valor dentro do objeto, no caso nomeObjeto/por isso usa o this, PONTO . CHAVE pra ter acesso ao valor.
    */
    return arr.map(function(item){ // retornar para a funcao.
        return item * this.value; // faltou o return para retornar o valor e não o indefinido.
    }, thisArg);
}

const nums = [1, 9, 5];


// concatenou mais um texto antes da execução das funcoes
console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));

// meu teste, defini um valor padrão para o objeto, então caso alguem n declare um objeto quando chamar a funcao vai ser executado com o valor definido, no caso 15.
console.log('this com valor padrão definido na declaracao', mapComThis(nums));

// exemplo sem ser com o arrow function
// esse exemplo tem um valor definido, ou seja n acessa outro item pra fazer a conta.
function mapSemThis(arr){
    return arr.map(function(item){
        return item*2
    })
}

console.log(mapSemThis(nums));