//Giorni della settimana sempre piu caldi
/*Esempio
Input: [29, 32, 30, 34, 28, 32, 31]
Output: 3 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let Lunedi: number = Number(prompt("Entra la temperatura?"))
let Martedi: number = Number(prompt("Entra la temperatura?"))
let Mercoledi: number = Number(prompt("Entra la temperatura?"))
let Giovedi: number = Number(prompt("Entra la temperatura?"))
let Venerdi: number = Number(prompt("Entra la temperatura?"))
let Sabato: number = Number(prompt("Entra la temperatura?"))
let Domenica: number = Number(prompt("Entra la temperatura?"))

let Temperatura: number[] = [Lunedi, Martedi, Mercoledi, Giovedi, Venerdi, Sabato, Domenica]
for(let i = 0; i< Temperatura.length; i++){
    if(Temperatura[i] >=32){
        console.log("Number di giorni caldi=", Temperatura[i])
    }
}