 /*numberOne = 1; //hoisting declarou uma variavel, sem ser do modo correto, apenas jogando a informação.

 console.log(numberOne + 2);
 
 
 var firstName = 'SOSK'

 if(firstName.length >= 10){
     console.log('puta nome grande ein fio.')

 }else{
     console.log(`${firstName}, Mas que nome bonito, parabens!`)
 }*/
 var firstName = 'Marta';
 var lastName = 'Rodrigues';

 if(firstName === 'Marta'){
     //let lastName = 'Marcondes'; // erro pois só é valido o ultimo, no caso gonzales.
     var firstName = 'Mercedes';
     let lastName = 'Gonzales';

     lastName = 'Marcondes' // mas podemos re-atribuir, sem necessidade de declarar novamente, se fosse variavel poderiamos re declarar.

     //usou os dados de dentro do bloco
     console.log(firstName, lastName);
 }
 
// usou o lastName global, pois está fora do bloco if
 console.log(firstName,lastName);