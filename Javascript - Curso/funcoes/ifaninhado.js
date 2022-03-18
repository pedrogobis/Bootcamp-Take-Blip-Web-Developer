function numerosPositivos(num){
    const eNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(eNegativo){
        return "esse valor é negativo!";
    }else if(!eNegativo && maiorQueDez){
        return "Esse numero é positivo e maior que 10"
    }
    return "esse numero é positivo."
}

console.log(numerosPositivos(-78));