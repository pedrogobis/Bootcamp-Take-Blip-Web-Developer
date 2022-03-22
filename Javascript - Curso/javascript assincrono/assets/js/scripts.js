// definimos uma constante que vai receber as informaçoes da api.
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';// faltou uma barra tanto na aula dela. URL TEM QUE SER COMPLETA

const changeCat = document.querySelector('#change-cat');

// declaramos uma constante que vai receber uma função assincrona usando arrow function
const getCats = async () => {
    // vai tentar fazer isso
    try{
        // criando uma constante que vai receber o await = que vai aguardar a api da url
        const data = await fetch(BASE_URL);
        // a const json vai converter as informações para um arquivo de java com as informações dentro de um objeto com chaves e valores
        const json =  await data.json();
        
        // aqui ele vai retornar a informação  da chave webpur1
        return json.webpurl; // errei aqui pq pensei que era um 1 no final mas era um l.
    } // se n der certo vai pegar o erro e vai printar no console com a mensagem de erro,
    catch(e){
        console.log(e.message);
    }
}

const loadImg = async () => {
    const catImg = document.querySelector('#cat');
    catImg.src = await getCats();
}

// estudar o eventlistner como já tinha anotado
// desse jeito não tem necessidade de criar a função onclick do botão
changeCat.addEventListener('click', loadImg);

// com isso já vai chamar a img na primeira vez que abrir a pagina.
loadImg()