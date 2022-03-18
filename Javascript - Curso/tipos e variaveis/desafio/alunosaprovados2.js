const alunos =
[{
    nome: 'marta',
    idade: 31,
    n1: 10,
    n2: 8,
    media: `${(this.n1*this.n2) / 2}`
},
 {
    nome: 'claudia',
    idade: 25,
    n1: 8,
    n2: 6,
    media: `${(this.n1*this.n2) / 2}`
},

{
    nome: 'luiz',
    idade: 27,
    n1: 5,
    n2: 6,
    media: `${(this.n1*this.n2) / 2}`
},

{
    nome: 'fernando',
    idade: 37,
    n1: 10,
    n2: 10,
    media: `${(this.n1*this.n2) / 2}`
},
]


let aprovados = []
let mediaf = 7

function alunosaprovados(array,mediaf1){
    // eu estava acessando errado os dados, estava tentando acessar com o this.
    for(let i = 0; i <= array.length; i++){


        //desse jeito estamos acessando os dados do array atual.
        // estava dando erro pois minha chave era n1 e nao nota. 
        const {media, nome} = array[i]; 


        if(media >= mediaf1){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosaprovados(alunos, 8));