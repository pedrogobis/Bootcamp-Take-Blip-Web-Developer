
function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2' ></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

} // Fim da função start


// vamos criar o fundo em loop do jogo.

//Principais variáveis do jogo
	

// criou a variavel com array vazio 
var jogo = {}

//criou uma variavel do tipo array, chamado telca, que vai recever em cada chave uma tecla pressionada
var TECLA = {
    W: 87, // valor decimal de cada tecla
    S: 83,
    D: 68
}
// faz parte da variavel ainda?
jogo.pressionou = [];

//Verifica se o usuário pressionou alguma tecla	
	
$(document).keydown(function(e){
	jogo.pressionou[e.which] = true;
	});


	$(document).keyup(function(e){
       jogo.pressionou[e.which] = false;
	});

//Game Loop
// colocou uma funcao de timer na variavel tempo, colocou a propriedade com loop de 30s
jogo.timer = setInterval(loop,30);

// criou a funcao loop
function loop() {
//chamou outra funcao
movefundo();
movejogador();

} // Fim da função loop()



//Função que movimenta o fundo do jogo

function movefundo() {
// criou uma variavel, que vai receber os dados da classe fundo game e background position
esquerda = parseInt($("#fundoGame").css("background-position"));
// aqui ele está fazendo o background position mover um pixel por cada 30s
$("#fundoGame").css("background-position",esquerda-1);

} // fim da função movefundo()

function movejogador() {
	
	if (jogo.pressionou[TECLA.W]) {
        // declarando a variavel, e na parte de baixo está executando - ela sobe
		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top",topo-10);
        // está definindo um limite para o elemento não sair do fundo.
        if (topo<=0) {
                
            $("#jogador").css("top",topo+10);
        }

	
	}
	
	if (jogo.pressionou[TECLA.S]) {
		//mesma coisa só que abaixando, só n sei pq os valores estão negativos
		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top",topo+10);	

        //valor aqui ele colocou de 434 que é de acordo com a img onde seria o chão, esse calculo cada jogo vai de uma 
        if (topo>=434) {	
            $("#jogador").css("top",topo-10);
                
        }


	}
	



	if (jogo.pressionou[TECLA.D]) {
		
		//Chama função Disparo	
	}

	} // fim da função movejogador()