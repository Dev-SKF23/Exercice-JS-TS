//Prodotto Meglio

console.clear()
type Prodotto = {
    nome: string;
    valutazioni: { [chiave: string]: number[] };
};

function prodottoMigliore(a: Prodotto[], p: string): string {
    let migliore: string = "";
    let mediaMigliore: number = -1;

    for (let i: number = 0; i < a.length; i++) {

        if (p in a[i].valutazioni) {

            let somma: number = 0;

            for (let j: number = 0; j < a[i].valutazioni[p].length; j++) {
                somma = somma + a[i].valutazioni[p][j];
            }

            let media: number = somma / a[i].valutazioni[p].length;

            if (
                media > mediaMigliore ||
                (media === mediaMigliore && a[i].nome < migliore)
            ) {
                mediaMigliore = media;
                migliore = a[i].nome;
            }
        }
    }

    return migliore;
}

// EXEMPLE 1
let a: Prodotto[] = [
    {
        nome: "Prodotto1",
        valutazioni: {
            qualita: [3, 4, 5],
            prezzo: [2, 3, 3, 1, 2, 6, 1]
        }
    },
    {
        nome: "Prodotto2",
        valutazioni: {
            qualita: [7, 7, 8, 4],
            design: [2, 3, 1, 5]
        }
    },
    {
        nome: "Prodotto3",
        valutazioni: {
            prezzo: [9],
            comoditaUso: [5, 6, 6, 5, 5]
        }
    }
];

console.log(prodottoMigliore(a, "qualita"));

// EXEMPLE 2
let b: Prodotto[] = [
    {
        nome: "Beta",
        valutazioni: {
            prezzo: [2, 4]
        }
    },
    {
        nome: "Alfa",
        valutazioni: {
            prezzo: [3, 3]
        }
    },
    {
        nome: "Gamma",
        valutazioni: {
            design: [9]
        }
    }
];

console.log(prodottoMigliore(b, "prezzo"));

/*Si scriva una funzione punti_spesa(a: string[]): number che, dato l’array a dei nomi 
dei prodotti acquistati da un cliente, restituisce il numero di punti spesa accumulati.
I prodotti acquistabili sono solo "pane", "latte", "sapone" e "acqua" (i nomi vanno confrontati 
esattamente, maiuscole comprese). Ogni acquisto dà 1 punto; inoltre ogni tre acquisti 
di "pane" (il 3°, il 6°, il 9°, …) si guadagna 1 punto in più.
Se a contiene un prodotto non tra quelli elencati, la funzione restituisce -1 
(anche se prima compaiono prodotti validi). Se a è vuoto, restituisce 0.
Esempio:
punti_spesa(["pane", "latte", "sapone", "acqua"])  →  4
punti_spesa(["pane", "pane", "pane", "latte"])      →  5   (4 acquisti + 1 bonus)
punti_spesa(["pane", "vino"])                       →  -1
 */

function punti_spesa(a:string[]){
let punti: number = 0;
let countPane: number= 0; 
if (a.length === 0) {
        return 0;
    }
    for(let prodotto of a){
        if(prodotto== "pane" || prodotto=="acqua" 
        || prodotto== "sapone" || prodotto=="latte"){
            punti++
        }
        
        if(prodotto!== "pane" && prodotto!=="acqua" 
        && prodotto!=="sapone" && prodotto!=="latte"){
            return -1
        }
        if(prodotto === "pane"){
            countPane= countPane+1
            if(countPane%3===0){
                punti = punti+1
            }
        }
    }
    return punti
}
console.log(punti_spesa(["pane", "latte", "sapone", "acqua"])); // 4

console.log(punti_spesa(["pane", "pane", "pane", "latte"])); // 5

console.log(punti_spesa(["pane", "vino"])); // -1
    