//Ricerca zeri, minimo, e massimo
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let x = 4;
let y = 0;
for (let i = 1; i <= 4; i += 1) {
    y = x * x * x - 6 * x * x + 11 * x - 6;
    if (y == 0) {
        console.log(x);
    }
}
