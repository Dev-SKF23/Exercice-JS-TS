/*Esercizi
1. Scrivere un programma che stampa la tabella di verità per la
funzione Booleana ‘OR’
2. Scrivere un programma che, data una temperatura in
Celsius, calcola e mostra a video la temperatura in
Fahrenheit (F = C × 1.8 + 32)
3. Scrivere un programma che, dato un numero di secondi,
calcola e mostra a video il numero di ore, minuti e secondi
inclusi. */

//1
console.log("A      B      A OR B");
for (const A of [false, true]) {
    for (const B of [false, true]) {
        console.log(A, B, A || B);
    }
} 

//2
import promptSync from"prompt-sync";
const prompt = promptSync();
let C: number = Number (prompt("Qual'è la temperatura in °C? "));
let F = C * 1.8 + 32;
console.log("Temperatura in Fahrenheit è =",F );

//3
import promptSync1 from "prompt-sync";
const prompt1 = promptSync1();
let n: number= Number (prompt("Enter second nomber "));
console.log("Ore =", n/3600);
console.log("Minuti =", n/60);
console.log("Secondi =", n);

//3 OR
let n1: number = Number(prompt("Enter seconds: "));

let ore = Math.floor(n / 3600);
let minuti = Math.floor((n1 % 3600) / 60);
let secondi = n1 % 60;
console.log(`${ore} ore, ${minuti} minuti, ${secondi} secondi`);


