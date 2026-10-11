/*Comandi iterativi - Esercizi
(Sommatoria) Si scriva un programma che dato un intero n calcoli e stampi la somma
dei numeri da 1 a n.
(Accumulatore) Si scriva un programma che somma numeri generati con
Math.random() – tra 0 e 6 – finché la somma non supera 101, quindi stampa la
somma.
(Primo) Si scriva un programma che dato un intero n, valuti se è primo (non esiste un
numero d in [2,n-1] tale che n sia divisibile per d). Si stampi il tempo di esecuzione del
programma.
(MultiPrimo) Si modifichi il programma di sopra per calcolare per 10 numeri (generati
con Math.random()) se si tratta di un numero primo.*/

/*//Sommatoria
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
console.log("La somma è:", somma);*/

/*//Accumulatore
let somma: number= 0;
while (somma<=101){
    somma = somma + Math.random()*6;
}
console.log("La somma è:",somma);*/

//Primo
import PromptSync from"prompt-sync";
const prompt = PromptSync ();
let n : number= Number(prompt("n?"))
if(n/1 && n/n) {
    console.log("nombre permier");
}
