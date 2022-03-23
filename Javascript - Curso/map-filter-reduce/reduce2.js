// lendo o exercicio fiquei em duvida se criava uma lista ou objeto, mas lista PODE conter objetos.
const lista = [
    {
        name: 'sabao de coco',
        price: 14,
    },
    {
        name: 'feijão',
        price: 10,
    },
    {
        name: 'bolo de laranja',
        price: 10,
    },
    {
        name: 'azeite gallo 500ml',
        price: 31,
    },
    {
        name: 'Azeitona preta 300g',
        price: 8,
    }


];

const saldoDisponivel = 100;

// vai começar com um sado disponive, e uma lista de produtos
function calculaSaldo(saldoDisponivel, lista){
    // vai executar um reduce, retornando o atual menos o atual, partindo do saldo disponivel, então para cada item adicionado no carrinho, vai reduzindo o valor do saldo disponivel
    // assim como eu tinha imaginado faltou dar a informação para pegar de cada objeto. para corrigir isso no current que vai ser o item da lista, coloca-se o ponto '.' nome da chave
    // Podemos deixar como padrão ao inves de usar prev, usar accumulator, seria uma regra/ pip da vida no python, seria até mais profissional, mas por aprendizado colocamos outro nome.
    return lista.reduce((prev, current, index)=> {
        // vai mostrar item por item igual o ex anterior
        console.log('rodada', index +1);
        console.log({prev});
        console.log({current});

        return prev - current.price 
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));
// retornou o valor que sobrou depois de comprar tudo.