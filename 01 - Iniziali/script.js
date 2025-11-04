/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function estraiPrimeLettere(names) {
    const result = names.map(parola => parola[0]);
    return result;
}
// Invoca la funzione qui e stampa il risultato in console
const primeLettere = estraiPrimeLettere(names);
console.log(primeLettere)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
