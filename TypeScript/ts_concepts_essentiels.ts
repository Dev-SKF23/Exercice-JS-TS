/*//Les types de base
let nom: string = "Marco";
let age: number =25;
let est_etudiant: boolean = true;
let rien: undefined = undefined;
let vide: null = null;
//La syntaxe est en realité nom_Variable: type = valeur.


//Les tableaux typés
let notes1: number[] =[12, 15, 18];
let noms: string[] =["Marco", "Jhon"];
//Autre syntaxe équivalente (moins courante)
let notes2: Array<number>= [12, 15, 18];


//Les fonctions typées
function addition (a: number, b:number): number{
    return a+b;
}
//Fonction fléchée typée
const multiplier = (a: number, b : number):number => a*b;
//Focntion qui ne retourne rien -> void
function afficher_message(msg:string):void{
    console.log(msg);
}


//Les types union(une variable qui peut être en plusieurs types)
let  id: number|string|boolean;
id = 5;         //ok
id ="abc123"    //ok
id = true;      //erreur, boolean non autorisé ici


//Les interfaces - definir la forme d'un objet
interface Personne{
    nom: string;
    age: number;
    est_etudiant?: boolean;
}
const etudiant: Personne = {
    nom:"Marco",
    age: 22
};
function dire_bonjour(p:Personne): void{
    console.log(`Bonjour ${p.nom}`);
}



//Les types personnalisés
type ID = number | string;
type Point = { x: number; y: number };
const p: Point = { x: 10, y: 20 };


//Les enums — un ensemble de valeurs nommées fixes
enum Statut {
  Actif,
  Inactif,
  EnAttente
}
let monStatut: Statut = Statut.Actif;
console.log(monStatut); // 0 (JS attribue un numéro à chaque valeur, en partant de 0)


//Les classes typées (POO)
class Animal {
  nom: string;
  age: number;

  constructor(nom: string, age: number) {
    this.nom = nom;
    this.age = age;
  }

  parler(): void {
    console.log(`${this.nom} fait du bruit.`);
  }
}

const chat = new Animal("Félix", 3);
chat.parler();


//Les génériques (<T>)
function identite<T>(valeur: T): T {
  return valeur;
}

console.log(identite<number>(5));       // fonctionne avec un number
console.log(identite<string>("salut")); // fonctionne avec un  */

/*let animal= "chien";

switch (animal){
  case "chien":
  case "chat":
  case "hypo":
  case "Rino":
    console.log("Animal toujours ex");
    break;
  case "Dino":
    console.log("Animal ext");
    break;
  default:
    console.log("Animal inconnu");
} */

let s : string = String(prompt("Che giorno della settimana?"));
    switch (jours){
    case "L":
      console.log("jours feriale");
    break;
    case "Sab":
    case "Dom":
      console.log("Week-end");
    break;
  }