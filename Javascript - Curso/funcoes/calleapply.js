const myobj = {
    num1: 1,
    num2: 4,
}

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

// muda apenas o jeito de chamar os parametros de entrada.
soma.call(myobj, 99, 5);

soma.call(myobj) // erro.

soma.apply(myobj, [1,9]);

// outro exemplo
const pessoa ={
    nome: 'frederico'
};

const animal ={
    nome: 'cookie'
};

function getalgumacoisa(){
    console.log(this.nome);
}

// teste diferente pra ver se pega o msm dado
function getAlgumacoisa2(obj){
    console.log(obj.nome);

}

getalgumacoisa.call(pessoa);
getalgumacoisa.call(animal);




/*
 apply e call pelo meus testes
 a grande diferença é para economizar digitação
 pois se eu fizesse igual fiz no função getalgumacoisa2 onde declaro um objeto ali no parametro, serviria pra acessar os dados, porem pra isso existe o this, se eu colocar um objeto ele já vai fazer a conta se n n rola.

 */