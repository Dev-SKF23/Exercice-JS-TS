/* Esercizio 1
Si scriva una funzione tuttiMaggiori(a, b) che, dati due array di numeri a, b restituisce true 
se tutti gli elementi di a sono strettamente maggiori di tutti gli elementi di b, e false altrimenti.
Con uno o entrambi gli array vuoti, la funzione restituisce true.
Commentare opportunamente il codice.
Esempio:
tuttiMaggiori([4, 5, 5, 9], [3, 0, 1])  →  true    (tutti gli elementi del primo sono più grandi di quelli del secondo) 
tuttiMaggiori([5, 4, 9], [3, 1, 4])  →  false   (il massimo del secondo array è uguale ad un elemento del primo) 
tuttiMaggiori([],[]) →  true  (entrambi array vuoti) 
tuttiMaggiori([1, 7, 2],[]) →  true  (uno degli array è vuoto)*/

function tuttiMaggiori(a: number[], b: number[]): boolean {

    // Si l'un des deux tableaux est vide, retourner true
    if (a.length === 0 || b.length === 0) {
        return true;
    }

    // Parcourir tous les éléments de a
    for (let i = 0; i < a.length; i++) {

        // Comparer a[i] avec tous les éléments de b
        for (let j = 0; j < b.length; j++) {

            // Si une comparaison échoue, retourner false
            if (a[i] <= b[j]) {
                return false;
            }
        }
    }

    // Toutes les comparaisons ont réussi
    return true;
}

console.log(tuttiMaggiori([4, 5, 5, 9], [3, 0, 1]));
console.log(tuttiMaggiori([5, 4, 9], [3, 1, 4]));
console.log(tuttiMaggiori([], []));
console.log(tuttiMaggiori([1, 7, 2], []));


/*Esercizio 2
Un array di numeri è palindromo se ha gli stessi elementi letti in avanti o al rovescio. 
Ad esempio, gli array [1, 0, 1], [4, 1, 1, 4] e [0] sono palindromi, mentre [1, 0, 1, 2] no.
Per convenzione, l'array vuoto [] è considerato palindromo.
Si scriva una funzione testaArrayPalindromo che verifica 
se l'array di numeri passato come parametro sia palindromo oppure no.*/

console.clear()

function testaArrayPalindromo (array:number[]): boolean{
    if(array.length === 0){
        return true;
    }
    for(let i:number = 0; i<array.length; i++){
        if(array[i] !== array[array.length - 1 - i] ){
            return false;
        }
    }
    return true; 
}
console.log(testaArrayPalindromo ([1, 0, 1]))
console.log(testaArrayPalindromo ([4, 1, 1, 4]))
console.log(testaArrayPalindromo([1, 0, 1, 2]))
console.log(testaArrayPalindromo([]))


/*Un oggetto "studente" è descritto dai seguenti campi:
nome (stringa)
matricola (stringa)
voti (un array di interi compresi in [18, 30])
Si definisca esplicitamente nel testo della soluzione questo tipo chiamandolo Studente.
Una classe di studenti è descritta mediante un array di oggetti "studente".
Si scriva una funzione primoDellaClasse(C) che data una classe C (non vuota), restituisca lo studente con media più alta. 
In caso di parità, la funzione deve restituire il primo trovato nell'array (ovvero, lo studente di indice minore fra quelli 
con la media più alta). Gli studenti che non hanno nessun esame, sono considerati avere media 0.
Commentare opportunamente il codice.
Esempio
Data la seguente classe:
[{nome: "Mario", matricola: 673291, voti: [19, 20, 30]}, // media = 23
 {nome: "Paola", matricola: 712981, voti: [25, 25, 25]}, // media = 25
 {nome: "Andrea", matricola: 731981, voti: [24, 25, 26]}] // media = 25
la funzione primoDellaClasse restituisce la studentessa
{nome: "Paola", matricola: 712981, voti: [25, 25, 25]}
in quanto ha la media più alta, e fra i due con media più alta è la prima nell'array della classe.*/

// Définition du type Studente
type Studente = {
    nome: string,
    matricola: string,
    voti: number[]
};

// Fonction qui retourne l'étudiant avec la meilleure moyenne
function primoDellaClasse(C: Studente[]): Studente {

    let migliore: Studente = C[0];
    let mediaMigliore: number = -1;

    // Première boucle : parcourir les étudiants
    for (let i: number = 0; i < C.length; i++) {

        let somma: number = 0;
        let media: number = 0;

        // Deuxième boucle : additionner les notes de l'étudiant
        for (let j: number = 0; j < C[i].voti.length; j++) {
            somma = somma + C[i].voti[j];
        }

        // Calculer la moyenne si l'étudiant possède des notes
        if (C[i].voti.length > 0) {
            media = somma / C[i].voti.length;
        }

        // Conserver l'étudiant ayant la meilleure moyenne
        if (media > mediaMigliore) {
            mediaMigliore = media;
            migliore = C[i];
        }
    }

    // Retourner l'objet étudiant gagnant
    return migliore;
}

// Exemple donné dans l'énoncé
let C: Studente[] = [
    {
        nome: "Mario",
        matricola: "673291",
        voti: [19, 20, 30]
    },
    {
        nome: "Paola",
        matricola: "712981",
        voti: [25, 25, 25]
    },
    {
        nome: "Andrea",
        matricola: "731981",
        voti: [24, 25, 26]
    }
];

// Afficher le résultat
console.log(primoDellaClasse(C));