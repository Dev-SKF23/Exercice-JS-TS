//Giorni della settimana sempre piu caldi
/*Esempio
Input: [29, 32, 30, 34, 28, 32, 31]
Output: 3 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let Lunedi = Number(prompt("Entra la temperatura?"));
let Martedi = Number(prompt("Entra la temperatura?"));
let Mercoledi = Number(prompt("Entra la temperatura?"));
let Giovedi = Number(prompt("Entra la temperatura?"));
let Venerdi = Number(prompt("Entra la temperatura?"));
let Sabato = Number(prompt("Entra la temperatura?"));
let Domenica = Number(prompt("Entra la temperatura?"));
let Temperatura = [Lunedi, Martedi, Mercoledi, Giovedi, Venerdi, Sabato, Domenica];
for (let i = 0; i < Temperatura.length; i++) {
    if (Temperatura[i] >= 32) {
        console.log("Number di giorni caldi=", Temperatura[i]);
    }
}
