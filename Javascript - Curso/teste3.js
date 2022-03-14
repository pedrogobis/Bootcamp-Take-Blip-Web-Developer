var player1 =3;
var player2 = 25;
var placar = 0;

// IF ternario
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