//Giorni della settimana sempre piu caldi
//Esempio
Input: [29, 32, 30, 34, 28, 32, 31]
Output: 3 
console.clear()
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let Lunedi: number = Number(prompt("Entra la temperatura di Lunedi "))
let Martedi: number = Number(prompt("Entra la temperatura di Martedi "))
let Mercoledi: number = Number(prompt("Entra la temperatura di Mercoledi "))
let Giovedi: number = Number(prompt("Entra la temperatura di Giovedi "))
let Venerdi: number = Number(prompt("Entra la temperatura di Venerdi "))
let Sabato: number = Number(prompt("Entra la temperatura di Sabato "))
let Domenica: number = Number(prompt("Entra la temperatura di Domenica "))

let counter: number= 0; 
let Temperatura: number[] = [Lunedi, Martedi, Mercoledi, Giovedi, Venerdi, Sabato, Domenica]
for(let i: number = 0; i< Temperatura.length; i++){
    if(Temperatura[i] >=32){
        counter= counter+1   
    }
}
console.log("Giorni caldi=", counter)

//Inventario
/*Esempio
Input: latte, 2, uova, 6, pane, 7, latte, 3, uova, 6, stop
Output: (latte, 5) (uova, 12) (pane, 7)*/

import PromptSync1 from "prompt-sync";
const prompt1 = PromptSync1();

let prodotto: string = String(prompt1("Entra il prodotto: "));
let quantità: number = Number(prompt1("Entra quantità: "));

let inventario: [string, number][] = [];

while (prodotto !== "stop") {

    // Cercare se il prodotto esiste già
    let trovato: boolean = false;

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i][0] === prodotto) {
            inventario[i][1] += quantità;
            trovato = true;
        }
    }

    // Se il prodotto non esiste, aggiungerlo
    if (trovato === false) {
        inventario.push([prodotto, quantità]);
    }

    // Leggere il prodotto successivo
    prodotto = String(prompt("Entra il prodotto: "));

    if (prodotto !== "stop") {
        quantità = Number(prompt("Entra quantità: "));
    }
}

console.log(inventario);