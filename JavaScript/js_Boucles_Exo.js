console.log("---Boucle for---");
for(let i=1; i<=4; i++){
    console.log("L'odre est:", i);
}

console.log("---Boucle while---");
let compteur = 5;
while (compteur > 0){
    console.log("Compter a rebours:", compteur); 
    compteur--;
}

console.log("---Boucle for...of---");
const jours =["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
for (const jour of jours){
    console.log(jour);
}


