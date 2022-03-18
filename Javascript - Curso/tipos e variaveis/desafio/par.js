function par(array){
    if(!array.length) return 'erro de input'

    for(let i = 0; i < array.length; i++){
       if(array[i]%2 == 0){
            array.splice(i,1,0)
       } 
    }
    console.log(array)
}

var numeros = [
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9,
   10
 ]

console.log(par(numeros));
