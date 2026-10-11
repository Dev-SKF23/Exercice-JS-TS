const age = 19;
const a_carte_etudiant = true;

console.log("Age:", age);
console.log("Comparaison strict 19 === '19':", age === "19");

if (age >= 18 && a_carte_etudiant){
    console.log("Accès étudiant autorisé");
}else if (age >= 18){
    console.log("Majeur, mais pas de carte étudiant");
}else{
    console.log("Accès refusé");
}

const message = (age >= 18)? "Vous êtes majeur" : "Vous êtes mineur";
console.log(message)

/*  ? = le "alors" (comme le début du bloc { } après un if)
    : = le "sinon" (équivalent au else) */
