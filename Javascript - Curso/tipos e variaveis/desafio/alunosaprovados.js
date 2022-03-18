/*const aluno1 ={
    nome: 'marta',
    idade: 31,
    n1: 10,
    n2: 8,
    media: `${(this.n1*this.n2) / 2}`
}

const aluno2 = {
    nome: 'claudia',
    idade: 25,
    n1: 8,
    n2: 6,
    media: `${(this.n1*this.n2) / 2}`
}

const aluno3 ={
    nome: 'luiz',
    idade: 27,
    n1: 7,
    n2: 6,
    media: `${(this.n1*this.n2) / 2}`
}

const aluno4 = {
    nome: 'fernando',
    idade: 37,
    n1: 10,
    n2: 10,
    media: `${(this.n1*this.n2) / 2}`
}
*/
// já definiu alunos como objetos dentro de array.


let alunos = [
    {
        nome: 'marta',
        idade: 31,
        n1: 10,
        turma: '1a'
    },
    {
        nome: 'claudia',
        idade: 25,
        n1: 8,
        turma:'1a',
    },
    {
        nome: 'luiz',
        idade: 27,
        n1: 7,
        turma: '1b',
    },
    {
        nome: 'fernando',
        idade: 37,
        n1: 10,
        turma: '1b'
    },
];



function alunosaprovados(array,media){
    let aprovados = [];


    // eu estava acessando errado os dados, estava tentando acessar com o this.
    for(let i = 0; i < array.length; i++){


        //desse jeito estamos acessando os dados do array atual.
        // estava dando erro pois minha chave era n1 e nao nota. 
        const {n1, nome} = array[i]; 


        if(n1 >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosaprovados(alunos, 8));