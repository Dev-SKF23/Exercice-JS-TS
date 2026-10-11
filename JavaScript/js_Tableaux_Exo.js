/*const notes = [12, 15, 8, 17, 10, 19];

console.log("Toutes les notes:", notes);
console.log("Nombre de notes:", notes.length);

//Ajouter une note
notes.push(14);
console.log("Après ajout:", notes);

//Notes qui sont >=10 (admis)
const admis = notes.filter((note) => note >= 10);
console.log("Notes admises:", admis);

//Ajouter 1 point de bonus a toutes les notes
const notesBonus = notes.map((note) => note + 1);
console.log ("Notes avec bonus:", notesBonus);

//Calculer la moyenne
const somme = notes.reduce((total, note) => total + note, 0);
const moyenne = somme / notes.length;
console.log("Moyenne:", moyenne);


// Demander une donnée (comme scanf)
let nom = prompt("Quel est votre nom ?");

// Afficher le résultat (comme printf)
console.log("Bonjour " + nom);*/

import promptSync from "prompt-sync";
const prompt = promptSync();

let : string = prompt("Che giorno della settimana? ");

switch (s) {
  case "L":
  case "Ma":
  case "Me":
  case "G":
  case "V":
    console.log("Giorno feriale");
    break;
  case "Sab":
  case "Dom":
    console.log("Week-end");
    break;
  default:
    console.log("Giorno non valido");
}