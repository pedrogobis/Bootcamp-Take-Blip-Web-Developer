function calculadora(){
    /*
    Vamos usar const, pois é um item que nunca vai mudar.
    */
    const operacao = Number(prompt('Escolha sua operação\n 1- Somar\n 2- Subtrair\n 3- Multiplicar\n 4- Divisão real\n 5- Divisão inteira\n 6- Potenciação\n'));
    /*
    Vamos fazer uma verificação dos dados, antes de executar a calculadora!

    ! = A exclamação antes da variavel, vai verificar se o dado digitado é realmente certo, no caso só pode ser numero, se for letra já da erro.

    || = se a entrada for diferente de numero OU maior ou igual a 7, aparece a mensagem de erro e volta pra calculadora!
    */
    if (!operacao || operacao >= 7){
        alert('Erro = Operação invalida, digite um valor valido!');
        calculadora();

    }else{

    var n1 = Number(prompt('Digite um numero!'));
    var n2 = Number(prompt('Digite outro numero!'));
    var resultado;
    
    /*Verificar a entrada dos numeros.*/
    if(!n1 || !n2){
        alert('Erro = valor digitado não está correto!')
        calculadora();
    }else{
        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            nvope();
        }
        function subitrair(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            nvope();
        }
        function multiplicar(){
            resultado = n1 * n2;
            alert(`${n1} X ${n2} = ${resultado}`);
            nvope();
        }
        function divireal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            nvope();
        }
        function diviint(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual á: ${resultado}`);
            nvope();
        }
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} elevado á ${n2} é igual:  ${resultado}`);
            nvope();
        }
    
        /*para executar essa nova função, vamos colocar o nome dela, em todas as outras funcoes, assim vai chamar ela sempre*/
        function nvope(){
            let opcao = Number(prompt('Deseja fazer mais contas?\n 1- SIM!\n 2- Nãaaao!'))
            
            if (opcao == 1){
                calculadora();
            }else if(opcao == 2){
                alert("até mais man!")
            }else{
                alert('Digite uma opção valida otario!')
                nvope();
            }
        }
    }


    /* 

    if (operacao == 1){
        soma();
    }else if(operacao ==2){
        subitrair();
    }else if(operacao == 3){
        multiplicar();
    }else if(operacao == 4){
        divireal();
    }else if(operacao == 5){
        diviint();
    }else if(operacao == 6){
        potenciacao();
    }else{
        alert.prompt('voce digitou alguma uma opção invalida')
    }
    */
    switch (operacao){
        case 1:
            soma();
            break;
        case 2:
            subitrair();
        case 3:
            multiplicar();
        case 4:
            divireal();
        case 5:
            diviint();
        case 6:
            potenciacao();
        
    }




    }


    

    
}













// se não colocar isso o arquivo não executa na pagina html, pois ela n está dando partida de lugar nenhum,
calculadora();