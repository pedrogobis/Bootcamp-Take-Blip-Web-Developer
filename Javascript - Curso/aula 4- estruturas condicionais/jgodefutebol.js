var player1 = 0;
var player2 = 1;
var placar = 0;

// IF ternario
player1 != -1 && player2 != -1 ? console.log('os jogadores são validos') : console.log('jogadores invalidos')
   
// IF 
   /* if ( player1 > 0 && player2 == 0 ){
        console.log(`Jogador1 esta ganhando`)
        placar = player1> player2;

    }else if(player2 > 0 && player1 == 0) {
        console.log('jogado2 esta ganhando')
        placar = player2 > player1;
    }else {
        console.log('ninguem marcou ponto')
    }*/
    player1 != -1 && player2 != -1 ? console.log('os jogadores são validos') : console.log('jogadores invalidos')
   
    if(player1 > player2 ){
        console.log(`player 1 ta ganhando`)
        placar = 'player1';
    }else if(player2 > player1){
        console.log(`player 2 ta ganhando`)
        placar = 'player2';
    }else if(player1 == player2) {
        console.log(`jogo está empatado`)
    }else{
        console.log('nda')
    }
    
    switch(placar){
        case placar = 'player1':
            console.log('Jogador 1 ganhou!')
        break
        case placar = 'player2':
            console.log('Jogador 2 ganhou!')
        break;
        case placar = player1 == player2:
            console.log('Empate')
        default:
        console.log('Ninguem ganhou ou perdeu.')
    
    }