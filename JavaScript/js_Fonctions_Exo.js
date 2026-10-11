//Fonction classique 
function est_majeur(age){
    return age >=18;
}
//Fonction fléchée equivalente
const est_majeur_fleche = (age) => age >=18;
console.log(est_majeur(20));        //true
console.log(est_majeur_fleche(15)); //false

//Fonction avec valeur par défaut
function presenter (nom = OK, age = 18){
    console.log(`${nom} a ${age} ans.`)
}
presenter("Marco",22);
presenter("Sophie"); //utilise 18 par défaut

//Fonction qui utilise une boucle vue precedement
function afficher_table (nombre){
    for(let i=1; i<=10; i++){
        console.log(`${nombre} x ${i} = ${nombre*i}`);
    }
}
afficher_table(3);