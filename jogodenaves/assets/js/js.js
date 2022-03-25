
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

// variavel para velocidade de movimentacao
var velocidade=5;
//variavel da posicao, usou a funcao math com random, ele vai pegar um numero aleatorio de 0 até 334. que é onde o item pode se mover no fundo da img
var posicaoY = parseInt(Math.random() * 334);

//variavel do tiro
var podeAtirar=true;


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
moveinimigo1();
moveinimigo2();
moveamigo();

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
		
        disparo();
		
	}

	} // fim da função movejogador()

    function moveinimigo1() {
        //criou uma variavel com a posicao do inimigo no x, então puxa a variavel velociadade e posicaoy  criadas anteriormente
        
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velocidade);
        $("#inimigo1").css("top",posicaoY);
            
            // aqui limita a posiicao do item y para n chegar até o nosso jogador 
            // quando ele chega até o jogador ele é reposicionado em outro lugar com valor randomico igual a posicao x
            // ele recriou a variavel
            if (posicaoX<=0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
                
            }
    } //Fim da função moveinimigo1()

    function moveinimigo2() {
        // cria uma variavel com a posicao x,  e depois  adiciona menos -3 na posicao
        // caminha para esquerda
        // anda mais devagar
        posicaoX = parseInt($("#inimigo2").css("left"));
	    $("#inimigo2").css("left",posicaoX-3);
			
        // aqui n deixa ela ir muito longe, já reposiciona ela dnv no msm local
		if (posicaoX<=0) {
			
		$("#inimigo2").css("left",775);
					
		}
} // Fim da função moveinimigo2()

function moveamigo() {
	// criou a variave, movimenta o css com +1
	posicaoX = parseInt($("#amigo").css("left"));
	$("#amigo").css("left",posicaoX+1);
		
        // n deixa fugir da caixa, reseta ai
		if (posicaoX>906) {
			
		$("#amigo").css("left",0);
					
		}

} // fim da função moveamigo()

function disparo() {
	
    //se pode atirar for igual a tiro
	if (podeAtirar==true) {
	// muda para false enquanto executar a funcao
	podeAtirar=false;
	
    // criou a variavel com as posicoes do jogador
	topo = parseInt($("#jogador").css("top"))
	posicaoX= parseInt($("#jogador").css("left"))
	// fez o calculo
    tiroX = posicaoX + 190;
	topoTiro=topo+39;
    //local inicial do tiro. na frente do jogador embaixo.
    // feito o calculo, chamou a img do disparo na frente do jogador
	$("#fundoGame").append("<div id='disparo'></div");
	$("#disparo").css("top",topoTiro);
	$("#disparo").css("left",tiroX);
	
    // criou uma variave, que vai receber o tempo, a cada 30s
	var tempoDisparo=window.setInterval(executaDisparo, 30);
	
	} //Fecha podeAtirar
    
   	function executaDisparo() {
        // 
	    posicaoX = parseInt($("#disparo").css("left"));
	    $("#disparo").css("left",posicaoX+15); 
                //colidindo e resetando
        		if (posicaoX>900) {
						
			window.clearInterval(tempoDisparo);// limpou
			tempoDisparo=null; // limpou o tempo
			$("#disparo").remove(); // removeu o disparo da tela pelo css
			podeAtirar=true; // voltou com true na variavel atirar.
					
                   }
	} // Fecha executaDisparo()
} // Fecha disparo()
