const retornaNome = function(){return this.nome};

let bruno = retornaNome.bind({nome: 'bruno'})

console.log(retornaNome);
//retorna o nome da funcao retornanoem 
console.log(retornaNome());
// retorna undefined pois na const o nome está vazio

console.log(bruno());