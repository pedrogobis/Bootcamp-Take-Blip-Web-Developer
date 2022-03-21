const usuarios = new Map();

usuarios.set('Pedro','ADM');
usuarios.set('Marcia', 'ADM');
usuarios.set('fernando', 'user');
usuarios.set('marcos', 'users');



function getAdmins(map){
    //criamos um array que vai receber os nomes dos adm
    let admin = [];
    // Para usar os dados do map precisa estar entre colchetes a informação que voce quer
    for([key, value] of map){
        if(value === 'ADM'){
            // se for igual, usamos os metodos do array, .push(info key)
            admin.push(key)
        }
    }
       return admin;
}

console.log(getAdmins(usuarios));