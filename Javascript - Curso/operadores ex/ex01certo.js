var a = 1;
var b = 3;

function comparanumeros(n1,n2){
    /*Vamos criar uma constante, com um operador logico booleano, vai retornar true ou false
    const saoiguais = num1 === num2;
    /* Vamos criar uma constante com a soma
    const soma = num1 + num2;
    /*
    if(saoiguais){
        return "São iguais"// Podemos usar o return tipo o python
    }return "Não são iguais"// usando o return n precisa nem declarar o else.
    */
    /*
    Exemplo ternario 
    return saoiguais ?  "são iguais" : "não sao iguais"
    */

    if(!n1 || !n2) return `Insira apenas numeros!`; // jeito novo de inserir o if, sem nda depois.
    
    const primeirafrase = criaprimeirafrase(n1,n2);
    const segundafrase = criasegundafrase(n1,n2);

    return `${primeirafrase} ${segundafrase}`



}

function criaprimeirafrase(n1,n2){
    let saoiguais = ''
    if (n1 !== n2){
        saoiguais = 'não'
    }
    return`Os numeros ${n1} e ${n2} ${saoiguais} são iguais`
};

function criasegundafrase(n1, n2){
    const soma = n1 + n2;
    let res10 ='menor';
    let res20 ='menor';
    const compara10 = soma >  10;
    const compara20 = soma > 20


    // se o compara10 e compara20 forem negativos eles não serão alterados, o if pode sim ter um else sem nda
    if (compara10){
         res10 = 'maior'
    }
    if(compara20){
        res20 = 'maior'
    }

    return`Sua soma é ${soma}, que é ${res10} que 10 e ${res20} que 20`

}
console.log(comparanumeros(6,200));