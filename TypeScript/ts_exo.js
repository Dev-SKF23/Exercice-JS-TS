/*Esercizi:
1 (Pari) Scrivere un programma che legga da tastiera un numero e
stabilisca se pari o meno, stampando in uscita rispettivamente 1 o 0.
2 (Max) Scrivere un programma che legga 3 numeri da tastiera e mostri a
video il loro massimo.cd
3 (Calcolatore) Scrivere un programma che legga due numeri e un
operatore tra +, -, * e / da tastiera e mostri a video il risultato
dell’operazione sui due numeri. */
//Pari
console.log("Pari");
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let n = Number(prompt("Valore di n "));
if (n % 2 === 0) {
    console.log("1");
}
else {
    console.log("0");
}
//Max5
console.log("Max");
import PromptSync1 from "prompt-sync";
const prompt1 = PromptSync1();
let a = Number(prompt1("valore di a "));
let b = Number(prompt1("valore di b "));
let c = Number(prompt1("valore di c "));
if (a >= b && a >= c) {
    console.log("Massimo è", a);
}
if (b >= a && b >= c) {
    console.log("Massimo è", b);
}
if (c >= a && c >= b) {
    console.log("Massimo è", c);
}
//Calcolatore
import promptSync2 from "prompt-sync";
const prompt2 = promptSync2();
let d = Number(prompt2("valore di d "));
let e = Number(prompt2("valore di e "));
let op = prompt2("operatore (+, -, *, /) ");
function calcolatore(d, e, op) {
    switch (op) {
        case "+":
            return d + e;
        case "-":
            return d - e;
        case "*":
            return d * e;
        case "/":
            return d / e;
        default:
            return NaN;
    }
}
console.log("Il risultato è:", calcolatore(d, e, op));
/*Esercizi (2)
1 (Media) Si scriva un programma che legga da tastiera 4 interi e stampi la
media aritmetica di tutti i valori diversi da zero e di segno uguale all’ultimo
valore della sequenza.
2 (Che tipo di dato?) Scrivere un programma che, dato un valore, utilizzi
l'operatore typeof insieme a uno switch per stampare a video una frase che
descriva il tipo del valore (es. "è un numero", "è una stringa", "è un valore
booleano", ecc.).
3 (Accesso) Scrivere un programma che legga da tastiera una stringa che
rappresenta una password, e usi l'operatore ternario per stampare "accesso
negato" se la stringa è vuota, altrimenti "accesso consentito".*/
//Media
console.log("Media");
import PromptSync3 from "prompt-sync";
const prompt3 = PromptSync3();
let f = Number(prompt3("Valore di f "));
let g = Number(prompt3("Valore di g "));
let h = Number(prompt3("Valore di h "));
let i = Number(prompt3("Valore di i "));
if (f != 0 && g != 0 && h != 0 && i != 0) {
    console.log("Moyenne: ", (f + g + h + i) / 4);
}
//
