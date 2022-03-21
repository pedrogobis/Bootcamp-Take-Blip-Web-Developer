function validaArray (arr, num){
    try{
        if(!arr && !num) throw new ReferenceError('Envie os parametros');
        if(typeof arr !== 'object')
         throw new TypeError('Array percisa ser do tipo object');
        if(typeof num !== 'number')
         throw new TypeError('num percisa ser do tipo ');
        if(arr.length !== num) 
        throw new RangeError('Tamanho Invalido')

        return arr;

    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Este erro é um erro de referencia')
            console.log(e.name);
            console.log(e.stack)
        }else if(e instanceof TypeError){
            console.log('Este erro é um erro de Tipo')
            console.log(e.name);
            console.log(e.stack)
        }else if(e instanceof RangeError){
            console.log(e.message)
            console.log(e.name);
            console.log(e.stack)
        }else{
            console.log('Erro muito louco, sem identificacao' + e);
        }


    }
}

console.log(validaArray([1, 2, 3, 5], 5));