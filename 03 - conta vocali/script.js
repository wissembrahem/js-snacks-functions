/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'wissem';
const vocali = ["a", "e", "i", "o", "u"];


// Dichiara la funzione qui.
function estrarre(word,vocali) {
    let results = [];
    for (let i = 0; i < word.length; i++) {
        const lettera = word[i];
        for (let i = 0; i < vocali.length; i++) {
            const vocale = vocali[i];
            if (vocale === lettera) {
                results.push(lettera);
            }
        }
    }
    
    return results
}


// Invoca la funzione qui e stampa il risultato in console
const output = estrarre(word, vocali);

console.log(output);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)