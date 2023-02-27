'use strict';

// JSSnack3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const listanomi = ['gino', 'paolo', 'franco', 'marco', 'luca'];
const listacognomi = ['ginu', 'depaoli', 'defranchi', 'demarco', 'deluchi'];
const nomecognome = [];

for (let i = 0; i < 3; i++) {
    const randomNome = Math.floor(Math.random() * listanomi.length);
    const randomCognome = Math.floor(Math.random() * listacognomi.length);

    const newnomecognome = `${listanomi[randomNome]} ${listacognomi[randomCognome]}`;
    nomecognome.push(newnomecognome);
}

console.log(nomecognome);



