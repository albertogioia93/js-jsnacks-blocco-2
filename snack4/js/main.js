'use strict';

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// const numero = parseInt(prompt('inserisci un numero'));

// for (let i = 0; i < 5; i++){
//     const numero = parseInt(prompt('inserisci un numero'));
// }

let sum = 0;

let count = 1;
while(count <= 5){

    const input = Number(prompt(`inserisci un numero (${count})`));
    console.log(input);
    if(!isNaN(input)){
        sum += input;
        count++;
    }
}

alert(sum);