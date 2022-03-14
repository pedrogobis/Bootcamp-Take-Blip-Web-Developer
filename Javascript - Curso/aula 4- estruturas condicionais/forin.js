var array = ['valor1', 'valor2', 'valor3', 'valor4' ]
var object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

//for in
for(var i in array){
    console.log(i);
    // retornou o numero dos indeces em string
}
// for in com object
for(i in object){
    console.log(i)
    // retornou o string do indice de cada objeto.
}