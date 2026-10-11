//1 Créer un tableau
const fruits = ["pomme", "banane", "orange"];
const nombres = [1, 2, 3, 4, 5];
const mixte = ["texte", 42, true] //possible mais a eviter en pratique 

//2 Accéder aux éléments (identique au C)
console.log(fruits[0]);  //"pomme" - les index commencent à 0, comme en C
console.log(fruits[2]);  //"orange"
console.log(fruits.length);  

//3 Modifier un tableau 
fruits[1]= "kiwi";
console.log(fruits);

//4 Ajouter/retirer des éléments 
const nombres2 = [1, 2, 3];

nombres2.push(4);
nombres2.pop();
nombres2.unshift(0);
nombres2.shift();

console.log(nombres2);

//5 Parcourir un tableau(3 façons)

const jours = ["Lundi", "Mardi", "Mercredi"];
/* Façon 1: boucle for classique (comme en c) */
for (let i = 0; i< jours.length; i++){
    console.log(jours[1]);
}
/* Façon 2: for...of (vu précedement, plus simple)*/
for(const jour of jours){
    console.log(jour);
}
/* Façon 3: méthode forEach (très utiliser en JS moderne) */
jours.forEach((jour) =>{
    console.log(jour);
});

//6 Les methodes puissantes: map, filter, reduce
const nombres3 = [1, 2, 3, 4, 5];
/* map: transforme chaque élément et retourne un nouveau tableau */
const doubles = nombres3.map((n) => n*2);
console.log(doubles);  //[2, 4, 6, 8, 10];
/* filter: garde seulement les éléments qui respectent une condition */
const paire = nombres3.filter((n) => n % 2 === 0);
console.log(pairs); //[2, 4]
/* reduce: réduit tout le tableau à une seul valeur (ex: une somme)*/
const somme = nombres3.reduce((total, n) => total + n, 0);
console.log(somme); //15

//7 Vérifier si un élément existe
console.log(nombres3.includes(3)) //true
console.log(nombres3.indexOf(3)); //2 (position de l'élément, -1 si absent)
