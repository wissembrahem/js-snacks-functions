/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */



// dichiarazione di variabili
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra", "Manuela"];
const letter = "M";

function  letsGet(names, letter) {

    let results = [];

    for (let i = 0; i < names.length; i++) {
        const firstLetter = names[i][0];
        if (firstLetter === letter) {
            results.push(names[i]);
        }
    }
    
    return results;
}

// Invoca la funzione qui e stampa il risultato in console
const results = letsGet(names, letter)


console.log(results);
