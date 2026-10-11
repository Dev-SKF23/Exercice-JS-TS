//1 Déclaration classique d'une fonction

function addition (a,b){
return a+b;
}
console.log("La somme =" ,addition(3, 5)); //affiche 8


//2 fonction sans valeur de retour
function dire_bonjour (nom){
    console.log(`bonjour, ${nom}!`);
}
dire_bonjour("Marco");

//3 Paramètres avec valeur par défaut (nouveauté par rapport au C)
function saluer(nom= "inviter"){
    console.log(`Bonjour, ${nom}!`);
}
saluer("Marco"); //Bonjour, Marco!
saluer();        //Bonjour, invité! (utilise la valeur par defaut)

//4 Fonction fléchées (=>)
function multiplier (a,b){
    return a*b;
}
//4.1 Même chose, en fonction fléchée
const multiplier2 = (a,b) => {
    return a*b;
};
//4.2 Version encore plus courte : si une seule instruction "return", on peut l'omettre
const multiplier3 = (a,b) => a*b;

console.log(multiplier(4,5)); //20
console.log(multiplier2(4,5)); //20
console.log(multiplier3(4,5)); //20

//5 Fonctin avec un seul paramètre
const carre = x => x*x; //pas besoin de parenthèses si un seul paramètre
console.log(carre(5)); //25


