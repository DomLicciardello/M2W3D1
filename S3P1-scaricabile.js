/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
function crazySum (a,b){
    return a===b ? (a+b)*3 : a+b
}

let sommaNumeri = crazySum (5,5)
console.log (sommaNumeri)
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
function boundary (number){
    return (number>=20 && number<=100 || number===400) ? true : false
}

let risultatoEsercizio = boundary(50)
console.log(risultatoEsercizio)
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
function reverseString(stringa) {
    return stringa.split("").reverse().join("");
}

let stringaDiProva = reverseString ("Io sono Domenico")
console.log(stringaDiProva)
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
function upperFirst(stringa) {
    let array = stringa.split(` `);
    let maiuscolo = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i][0] === array[i][0].toLowerCase()) {
            maiuscolo.push(array[i][0].toUpperCase() + array[i].slice(1));
        }
    }
    return maiuscolo.join(" ");
}

let risultatoFinale = upperFirst ("io sono domenico licciardello")
console.log (risultatoFinale)
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
function giveMeRandom(n) {
    return (Math.floor(Math.random()*10));
}

let risultatoFinale = giveMeRandom()
console.log (risultatoFinale)
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
function area (l1, l2){
    let calcolo = l1*l2;
    return calcolo;
}

let risultato = area (10,20)
console.log (risultato)
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*
function crazyDiff(n) {
    let calcolo = Math.abs(n - 19);
    return (calcolo > 19) ?  calcolo*3 : calcolo;
   }

   let risultato = crazyDiff (50)
   console.log (risultato)
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
