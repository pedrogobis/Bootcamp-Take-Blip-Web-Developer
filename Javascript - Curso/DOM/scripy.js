function changeMode(){
    // console sempre verificando se está dando tudo certo. console.log('cliquei')
    // chamar as funcoes dentro da funcao chefe.
    changeClasses();
    changeText();
}

function changeClasses(){
    btn.classList.toggle(darkMode)
    title.classList.toggle(darkMode)
    corpo.classList.toggle(darkMode)
    rodape.classList.toggle(darkMode)
}

function changeText(){
    // defindindo tbm light mode como constante pra n ter erro
    const lightMode = 'Light Mode';
    // palavra darkmode do botao pra diminuir erro.
    const darkModetxt = 'Dark Mode';
    //verificar se existe container com dark-mode
    if(corpo.classList.contains(darkMode)){
        // podemos verificar o inner dentro do console pra ter certeza do titulo
        btn.innerHTML = lightMode;
        title.innerHTML = darkModetxt + ' ON';
        return;
    }
        btn.innerHTML = darkModetxt;
        title.innerHTML = lightMode + ' ON';
}

//pra n precisar ficar escrevendo toda vez e dar margem pra erro.
const darkMode = 'dark-mode';
const btn = document.getElementById('mode-selector');
const title = document.querySelector('#titulo')
const corpo = document.querySelector('body');
const rodape = document.querySelector('footer');

console.log(corpo);

btn.addEventListener('click', changeMode);