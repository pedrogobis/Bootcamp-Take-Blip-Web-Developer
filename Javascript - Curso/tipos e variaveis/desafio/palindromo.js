
// solucao 1 
function verifica(string){
    // se ela é diferente de true 
    if (!string) return 'valor inexistente';
     
    // retorna a string fatiada ponto reversa e ponto junta tudo tem que ser igual a string original
    return string.split("").reverse().join("") === string;
 }

var a = 'roma';
var b = 'marta';

function verfica2(string){
    if(!string) return 'valor inexistente';

    // a divisão por dois, signficia que vai até a metade da string só    
    for(let i =0; i<= string.length /2; i++){
        
        //criando um if para verificar se são iguais dos dois lados, uma vai começar no indice e a outra vai começar do final então por isso o -1
        // o -i para ser -1 numero pra bater com o indice 
        // colchetes para declarar o indice.
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }
    
    return true;
 }

 console.log(verfica2('ovo'))