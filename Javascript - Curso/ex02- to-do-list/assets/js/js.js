let res = document.getElementsByTagName('p')[4];// Podemos pegar os elementos de uma pagina deste jeito também, indicando o numero da tag com colchetes do lado de fora

let contador = 0;

function clicou(){
    contador ++ // não precisa colocar um igual, pois já fala que o contador recebe ++
    res.style.color = 'red';  // mudou a cor.
    res.innerHTML = `Você clicou ${contador} vezes`;

}
function clicoumenos(){
    contador --
    res.style.color = 'blue'
    res.innerHTML = `Você clicou ${contador} vezes`;

}