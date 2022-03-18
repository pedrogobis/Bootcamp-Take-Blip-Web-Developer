const pessoa ={
    nome: 'marta',
    sobrenome: 'luca',
    id: 1,
    fullname: function(){
        // this vai se referir a pessoa, já que ele está dentro do bloco pessoa, então no caso seria mesma coisa que pessoa.nome.
        return this.nome + ' ' + this.sobrenome;
    },
    getId: function(){
        return this.id;
    }
}

console.log(pessoa.fullname());

console.log(pessoa.getId());