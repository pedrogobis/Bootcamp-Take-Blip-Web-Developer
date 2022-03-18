
//Certinho e feito!

const aluno1 ={
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

function calculaIdade(anos){
    return `Daqui a ${anos}, anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

console.log(calculaIdade.call(aluno1,4));