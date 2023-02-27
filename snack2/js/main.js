'use strict';

// JSsnack2
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

const input = Number(prompt('inserisci un numero'));

if (input % 0) {
    console.log(input);
} else {
    console.log(input++);
}