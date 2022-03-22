/*
Neste classico exercicio de POO. vamos replicar um banco
criar conta bancaria com dados e aplicar metodos.

*/

//classe definida
//classe mais abstrata
class ContaBancaria{
    // dentro de construtor colocamos as informações que queremos que ela tenha
    constructor(agencia, numero, tipo){
        this.agencia =  agencia;
        this.numero = numero;
        this.tipo = tipo;
        // underline na frente pra poder usar o nome no get e set
        this._saldo = 0;
    }
    
    // criando parametros para poder acessar.
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    // criando funçoes padrão que uma conta bancaria pode fazer.
    sacar(valor){
        if(valor > this._saldo){
            return 'Saldo insuficiente'
        }
        this._saldo = this._saldo - valor;
        return this._saldo
    }
    
    depositar(valor){
        this._saldo = this._saldo + valor;
    }

};

// vamos criara  conta corrente, que vai ser filha de conta bancaria e vai herdar as funçoes e ter outras

// toda vez que usamos o super precisamos usar o extends e lincar a classe pai
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
        // envia para o pai todos os dados que essa classe receber
        super(agencia, numero, saldo);
        // definindo o tipo que desta conta
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;



    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

};

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        // envia para o pai todos os dados que essa classe receber
        super(agencia, numero);
        // definindo o tipo que desta conta
        this.tipo = 'poupanca';
    }

};
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero ){
        // envia para o pai todos os dados que essa classe receber
        super(agencia, numero);
        // definindo o tipo que desta conta
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return 'operacao negada'
        }
        this._saldo = this._saldo - valor;
    }

}


// tudo vai ser usado na linha de comando. 
// exercicio legal, provavelmente vou criar a interface grafica para usar e depois vincular com o mysql.