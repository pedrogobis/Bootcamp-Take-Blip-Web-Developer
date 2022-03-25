
function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2' ></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

} // Fim da função start


// vamos criar o fundo em loop do jogo.

//Principais variáveis do jogo
	// criou a variavel com objeto vazio 
var jogo = {}
	
//Game Loop
// colocou uma funcao de timer na variavel tempo, colocou a propriedade com loop de 30s
jogo.timer = setInterval(loop,30);

// criou a funcao loop
function loop() {
//chamou outra funcao
movefundo();

} // Fim da função loop()



//Função que movimenta o fundo do jogo

function movefundo() {
// criou uma variavel, que vai receber os dados da classe fundo game e background position
esquerda = parseInt($("#fundoGame").css("background-position"));
// aqui ele está fazendo o background position mover um pixel por cada 30s
$("#fundoGame").css("background-position",esquerda-1);

} // fim da função movefundo()
