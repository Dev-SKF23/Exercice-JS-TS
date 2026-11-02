/*1. Definire una funzione replace(arr, target, replacement) che,
dato un array arr, ritorni un nuovo array dove tutte le istanze di target
sono sostituite da replacement. Non modificare l’array originale.
2. Definire una funzione contamaggioredi(arr, threshold) che ritorni il
numero di elementi di arr maggiori strettamente di threshold.
3. Dati due array x e y ad n componenti, definire prodotto_scalare(x, y)
che ritorna la somma di x[i]*y[i]. Se le lunghezze differiscono, ritorna
NaN. Formula: x · y = somma_{i=1..n} x_i * y_i
4. Definire clip(arr, threshold, replacement) che ritorni un nuovo
array dove ogni elemento > threshold viene sostituito con replacement.
Usare come valore di default per il parametro replacement la soglia
threshold. */

//1
function replace(arr: number[], target: number, replace: number): number[] {
    let array: number[] = [];

    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            array.push(replace);
        } else {
            array.push(arr[i]);
        }
    }

    return array;
}

console.log(replace([5, 3, 5, 8], 5, 1));
// Résultat : [1, 3, 1, 8]
