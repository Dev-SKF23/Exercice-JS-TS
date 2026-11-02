/*function carree (x: number) {
    return x**2
}
console.log(carree(3))

//Une fonction qui retourne une valeur
function somma(a: number, b: number): number{
    return a+b;
}
let risultato: number = somma(2,5);
console.log(risultato);

//Une fonction de type void
function saluta(Name: string): void {
    console.log(`Ciao ${ Name}`);
}

//Comprendre le rôle de return
function cercaValore(array: number[], valore: number): boolean {
    for (let elemento of array) {
        if (elemento === valore) {
            return true;
        }
    }
    return false;
}
//Esempio
console.log(cercaValore([5, 8, 13], 8));  // true
console.log(cercaValore([5, 8, 13], 10)); // false

//Passer un tableau à une fonction
function aggiungi(v: number[]): void {
    v.push(99);
}

let lista: number[] = [1, 2];
aggiungi(lista);

console.log(lista);
//Risultato
[1, 2, 99]

//Les paramètres par défaut (parametri di default)
function saluta(nome: string, saluto: string = "Ciao"): void {
    console.log(`${saluto} ${nome}`);
}

saluta("Marta");                 // Ciao Marta
saluta("Marta", "Buongiorno");   // Buongiorno Marta

//Le scope global (scope globale)
let n: number = 3;

function double(): number {
    return n * 2;
}

console.log(double()); // 6
console.log(n);        // 3

//Le scope de fonction (scope di funzione)
function somma(a: number, b: number): number {
    let risultato: number = a + b;
    return risultato;
}

console.log(somma(2, 5)); // 7

//Le scope de bloc (scope di blocco)
let x: number = 1;

if (x > 0) {
    let y: number = 2;
    console.log(x + y); // 3
}

console.log(x); // 1
console.log(y); // Erreur

//Les scopes imbriqués (scope annidati)
let x: number = 1;

function f(): void {
    let y: number = 2;

    if (y > 0) {
        let z: number = 3;
        console.log(x + y + z); // 6
    }

    console.log(y); // 2
    console.log(z); // Erreur
}

//Le shadowing (oscuramento)
let n: number = 3;

function prova(): void {
    let n: number = 10;
    console.log(n);
}

prova();           // 10
console.log(n);    // 3
*/