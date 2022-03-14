var array = ['valor1', 'valor2', 'valor3', 'valor4' ]
var object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

for (i of array){
    console.log(i);
    // retorna o valor de cada indice.
}
for(i of object.propriedade1){
    console.log(i)
}
