/*Esercizi:
○ (Pari) Scrivere un programma che legga da tastiera un numero e
stabilisca se pari o meno, stampando in uscita rispettivamente 1 o 0.
○ (Max) Scrivere un programma che legga 3 numeri da tastiera e mostri a
video il loro massimo.
○ (Calcolatore) Scrivere un programma che legga due numeri e un
operatore tra +, -, * e / da tastiera e mostri a video il risultato
dell’operazione sui due numeri. */

//Pari


/*import promptSync from "prompt-sync";
const prompt = promptSync();

let s: string = prompt("Che giorno della settimana? ");

switch (s) {
  case "L":
  case "Ma":
  case "Me":
  case "G":
  case "V":
    console.log("Giorno feriale");
    break;
  case "Sab":
  case "Dom":
    console.log("Week-end");
    break;
  default:
    console.log("Giorno non valido");
}*/

//sommatoria
let i: number = Number(prompt("n?"));
let somma:number= 0;
while(i<=10){
    somma= somma+i;
    i++;
}
console.log (somma);
