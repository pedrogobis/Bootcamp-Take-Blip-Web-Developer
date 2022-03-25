
function start() { // Inicio da função start()

	$("#inicio").hide();
	//criando as divs que vao conter os conteudos do jogo.
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2' ></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");
    $("#fundoGame").append("<div id='placar'></div>");
    $("#fundoGame").append("<div id='energia'></div>");



    //Principais variáveis do jogo

var jogo = {}
var TECLA = {
    W: 87, 
    S: 83,
    D: 68
}

jogo.pressionou = [];

var velocidade=5;
var posicaoY = parseInt(Math.random() * 334);
var podeAtirar=true;
var fimdejogo=false;
var pontos=0;
var salvos=0;
var perdidos=0;
var energiaAtual=3;

// colocar o som no jogo
var somDisparo=document.getElementById("somDisparo");
var somExplosao=document.getElementById("somExplosao");
var musica=document.getElementById("musica");
var somGameover=document.getElementById("somGameover");
var somPerdido=document.getElementById("somPerdido");
var somResgate=document.getElementById("somResgate");


/*
Comentarios sobre as variaveis:

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

//variavel para finalizar o jogo.
var fimdejogo=false;

//variaveis do placar.
var pontos=0;
var salvos=0;
var perdidos=0;

*/

//Música em loop/ executa a musica padrão do jogo / está usando o js padrão nda de jquery
musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
musica.play();


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
colisao();
placar();
energia();




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
	somDisparo.play();
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

/*
function colisao() {
    // usando o novo framework, collision é uma funcao do framework
	var colisao1 = ($("#jogador").collision($("#inimigo1")));
	// jogador com o inimigo1

	console.log(colisao1);

} //Fim da função colisao()
*/

// refatorando a colisao
function colisao() {
    // verficando se vai haver colisao entre o jogador um e o inimigo 1
    var colisao1 = ($("#jogador").collision($("#inimigo1")));
    //Criou todas as possibilidades de colisão 
    var colisao2 = ($("#jogador").collision($("#inimigo2")));
    var colisao3 = ($("#disparo").collision($("#inimigo1")));
    var colisao4 = ($("#disparo").collision($("#inimigo2")));
    var colisao5 = ($("#jogador").collision($("#amigo")));
    var colisao6 = ($("#inimigo2").collision($("#amigo")));
    // jogador com o inimigo1
        
        // se bateu vai reposicionar o inimigo.
        if (colisao1.length>0) {
        energiaAtual--;
            // posicao dos inimigos
        inimigo1X = parseInt($("#inimigo1").css("left"));
        inimigo1Y = parseInt($("#inimigo1").css("top"));
        //chamando uma explosao com os parametros do inimigo.
        explosao1(inimigo1X,inimigo1Y);
    
        posicaoY = parseInt(Math.random() * 334);
        $("#inimigo1").css("left",694);
        $("#inimigo1").css("top",posicaoY);
        }
        // jogador com o inimigo2 
        if (colisao2.length>0) {
            
        energiaAtual--;
        inimigo2X = parseInt($("#inimigo2").css("left"));
        inimigo2Y = parseInt($("#inimigo2").css("top"));
        explosao2(inimigo2X,inimigo2Y);
                
        $("#inimigo2").remove();
            
        reposicionaInimigo2();
            
        }	
        
        // Disparo com o inimigo1
		
	    if (colisao3.length>0) {
        
        pontos=pontos+100;
		velocidade=velocidade+0.3;
        inimigo1X = parseInt($("#inimigo1").css("left"));
        inimigo1Y = parseInt($("#inimigo1").css("top"));
            //aproveitou a mesma explosao
        explosao1(inimigo1X,inimigo1Y);
        $("#disparo").css("left",950);
            
        posicaoY = parseInt(Math.random() * 334);
        $("#inimigo1").css("left",694);
        $("#inimigo1").css("top",posicaoY);
            
        }
    
        // Disparo com o inimigo2
		
	    if (colisao4.length>0) {
		
        pontos=pontos+50;

        inimigo2X = parseInt($("#inimigo2").css("left"));
        inimigo2Y = parseInt($("#inimigo2").css("top"));
        $("#inimigo2").remove();
    
        explosao2(inimigo2X,inimigo2Y);
        $("#disparo").css("left",950);
        
        reposicionaInimigo2();
            
        }
        // jogador com o amigo
		
	    if (colisao5.length>0) {
        somResgate.play();
        salvos++;
        velocidade=velocidade-0.1;
        reposicionaAmigo();
        $("#amigo").remove();
        }
        
        //Inimigo2 com o amigo
		
        if (colisao6.length>0) {
        perdidos++;
        amigoX = parseInt($("#amigo").css("left"));
        amigoY = parseInt($("#amigo").css("top"));
        explosao3(amigoX,amigoY);
         $("#amigo").remove();
            
         reposicionaAmigo();
            
       }
    

    } //Fim da função colisao()

    //Explosão 1
function explosao1(inimigo1X,inimigo1Y) {
    //
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao1'></div");
	    $("#explosao1").css("background-image", "url(assets/imgs/explosao.png)");
	    var div=$("#explosao1");
	    div.css("top", inimigo1Y);
	    div.css("left", inimigo1X);
        //tamanho opacidade e velocidade
	        div.animate({width:200, opacity:0}, "slow");
	    // criou um tempo para remover a explosao  
	    var tempoExplosao=window.setInterval(removeExplosao, 1000);
	
        //zerou
		    function removeExplosao() {
			
			    div.remove();
			    window.clearInterval(tempoExplosao);
			    tempoExplosao=null;
			
		}
		
	} // Fim da função explosao1()

    //Reposiciona Inimigo2
	// da um tempo para depois apresentar o inimigo 2 novamente

	function reposicionaInimigo2() {
	
        var tempoColisao4=window.setInterval(reposiciona4, 5000);
            
            function reposiciona4() {
            window.clearInterval(tempoColisao4);
            tempoColisao4=null;
                
                if (fimdejogo==false) {
                
                $("#fundoGame").append("<div id=inimigo2></div");
                
                }
                
            }	
        }	
    

        //Explosão2
	// mesma explosao do 1 mas dando os parametros ao inimigo 2
	function explosao2(inimigo2X,inimigo2Y) {
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao2'></div");
        $("#explosao2").css("background-image", "url(assets/imgs/explosao.png)");
        var div2=$("#explosao2");
        div2.css("top", inimigo2Y);
        div2.css("left", inimigo2X);
        div2.animate({width:200, opacity:0}, "slow");
        
        var tempoExplosao2=window.setInterval(removeExplosao2, 1000);
        
            function removeExplosao2() {
                
                div2.remove();
                window.clearInterval(tempoExplosao2);
                tempoExplosao2=null;
                
            }
            
            
        } // Fim da função explosao2()
    
        //Reposiciona Amigo
	
	function reposicionaAmigo() {
	
        var tempoAmigo=window.setInterval(reposiciona6, 6000);
        
            function reposiciona6() {
            window.clearInterval(tempoAmigo);
            tempoAmigo=null;
            
            if (fimdejogo==false) {
            
            $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
            
            }
            
        }
        
    } // Fim da função reposicionaAmigo()
    
    //Explosão3
	
    function explosao3(amigoX,amigoY) {
        somPerdido.play();
        $("#fundoGame").append("<div id='explosao3' class='anima4'></div");
        $("#explosao3").css("top",amigoY);
        $("#explosao3").css("left",amigoX);
        var tempoExplosao3=window.setInterval(resetaExplosao3, 1000);
        function resetaExplosao3() {
        $("#explosao3").remove();
        window.clearInterval(tempoExplosao3);
        tempoExplosao3=null;
            
    }
    
    } // Fim da função explosao3

    function placar() {
	
        $("#placar").html("<h2> Pontos: " + pontos + " Salvos: " + salvos + " Perdidos: " + perdidos + "</h2>");
        
    } //fim da função placar()
    //Barra de energia

    function energia() {
        
        if (energiaAtual==3) {
            
            $("#energia").css("background-image", "url(assets/imgs/energia3.png)");
        }

        if (energiaAtual==2) {
            
            $("#energia").css("background-image", "url(assets/imgs/energia2.png)");
        }

        if (energiaAtual==1) {
            
            $("#energia").css("background-image", "url(assets/imgs/energia1.png)");
        }

        if (energiaAtual==0) {
            
            $("#energia").css("background-image", "url(assets/imgs/energia0.png)");
            
            //Game Over
            gameOver();
        }

    } // Fim da função energia()

    //Função GAME OVER
	function gameOver() {
        fimdejogo=true;
        musica.pause();
        somGameover.play();
        
        window.clearInterval(jogo.timer);
        jogo.timer=null;
        
        $("#jogador").remove();
        $("#inimigo1").remove();
        $("#inimigo2").remove();
        $("#amigo").remove();
        
        $("#fundoGame").append("<div id='fim'></div>");
        
        $("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>" + "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
        } // Fim da função gameOver();
    

} // Fim da função start

    
//Reinicia o Jogo
		
    function reiniciaJogo() {
	somGameover.pause();
	$("#fim").remove();
	start();
	
    } //Fim da função reiniciaJogo




        
        
