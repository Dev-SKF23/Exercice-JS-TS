/*Comandi iterativi - Esercizi
(Sommatoria) Si scriva un programma che dato un intero n calcoli e stampi la somma
dei numeri da 1 a n.
(Accumulatore) Si scriva un programma che somma numeri generati con
Math.random() – tra 0 e 6 – finché la somma non supera 101, quindi stampa la
somma.
(Primo) Si scriva un programma che dato un intero x, valuti se è primo (non esiste un
numero d in [2,x-1] tale che n sia divisibile per d). Si stampi il tempo di esecuzione del
programma.
(MultiPrimo) Si modifichi il programma di sopra per calcolare per 10 numeri (generati
con Math.random()) se si tratta di un numero primo.*/

//Sommatoria
console.log("Sommatoria")
import PromptSync from "prompt-sync";
const prompt = PromptSync ();
//Etape 1: on lit n, la limite demandée par l'utilisateur
let n: number = Number (prompt("Qual'e la valore di n?"));
//Etape 2: on prepare deux variable séparées
let i: number=1; //Le compteur par de 1
let somma: number = 0 //Le total part de 0
//Etape 3 la boucle tourne tant que i n'a pas depassé n
while (i<=n){
    somma = somma + i;
    i++;
}
console.log("La somma è:", somma);

//Accumulatore
console.log("Accumulatore")
let somma1: number= 0;
while (somma1<=101){
    somma1 = somma1 + Math.random()*6;
}
console.log("La somma è:",somma1);

//Primo
console.log("Primo")
import promptSync1 from "prompt-sync";
const prompt1 = promptSync1();
let x: number = Number(prompt1("x? "));
let NumPrimo: boolean = true;
for (let d = 2; d < x; d++) 
/*d est le diviseur qu’on essaie. Il part de 2 
(on ignore 1, qui divise tout) et monte jusqu’à x - 1 (on ignore x lui-même). 
Ce sont exactement les valeurs de l’intervalle [2, n-1] de l’énoncé. */ 
{
    if (x % d === 0) {
        NumPrimo = false;
    }
}
if (NumPrimo) {
    console.log("numero primo");
} else {
    console.log("numero non primo");
}

//MultiPrimo
console.log("MultiPrimo");
for (let k = 0; k < 10; k++) {
    const y = Math.floor(Math.random() * 100);
    let numPrimo: boolean = true;

    for (let d = 2; d < y; d++) {
        if (y % d === 0) {
            numPrimo = false;
        }
    }
    if (numPrimo) {
        console.log(y, "numero primo");
    } else {
        console.log(y, "numero non primo");
    }
}

 
/*Esercizi Extra
(Fattoriale) Si scriva un programma che dato un intero n calcoli e stampi il suo fattoriale.
Si ricorda che il fattoriale di n è n! = 1*2*….*(n-1)*n
(Asterischi) Si scriva un programma che dato un intero n stampi n asterischi sulla prima
linea, n − 2 asterischi sulla seconda linea, n − 4 sulla terza e così via, fino ad arrivare a
stampare uno o due asterischi sull’ultima linea
(Stampa selettiva) Si scriva un programma che legga da tastiera degli interi e stampi
l’elemento letto se rispetta una delle seguenti proprietà: (i) E’ positivo e pari, oppure (ii) è
negativo e preceduto (nell’ordine di inserimento) da un intero con valore maggiore o
uguale. Terminare la l’acquisizione alla lettura di uno zero.
(Media) Si scriva un programma che legga da tastiera 10 interi e stampi la media
aritmetica di tutti i valori diversi da zero e di segno uguale all’ultimo valore della sequenza.*/

