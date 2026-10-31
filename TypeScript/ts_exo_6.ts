//perfetto
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let y: number = Number(prompt("Inserisci il valore di x:"));
let p: number = y;
let trova: boolean = false;
while (!trova) {
    let somma: number = 0;

    for (let i = 1; i < p; i++) {
        if (p % i === 0) {
            somma = somma + i;
        }
    }

    if (somma === p) {
        trova = true;
    } else {
        p++;
    }
}

console.log("Numero perfetto trovato:");
 // Ricerca zeri, minimo, e massimo
console.clear();

let min: number = 0;
let max: number = 0;

for (let x: number = 1; x <= 4; x += 0.01) {
    let y = x*x*x - 6*x*x + 11*x - 6;

    if (Math.abs(y) < 1e-6) {
        console.log("Zero trovato: f(", x, ") =", y);
    }

    if (y < min) {
        min = y;
    }

    if (y > max) {
        max = y;
    }
}

console.log("Minimo =", min);
console.log("Massimo =", max);

