// definimos uma constante que vai receber as informaçoes da api.
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';// faltou uma barra tanto na aula dela. URL TEM QUE SER COMPLETA

const changeCat = document.querySelector('#change-cat');

// declaramos uma constante que vai receber uma função assincrona usando arrow function
const getCats = async () => {
    // refatorando o codigo com uma sintese diferente, usando o then e o cathc
    const data = await fetch(BASE_URL) // nao pode colocar ponto e virgula aqui, pois até o final do catch faz parte desta variavel.
        .then(res=> res.json()) 
        .catch(e => console.log(e.message));
    
        return data.webpurl;

    
};
    


const loadImg = async () => {
    const catImg = document.querySelector('#cat');
    catImg.src = await getCats();
}

// estudar o eventlistner como já tinha anotado
// desse jeito não tem necessidade de criar a função onclick do botão
changeCat.addEventListener('click', loadImg);

// com isso já vai chamar a img na primeira vez que abrir a pagina.
loadImg()