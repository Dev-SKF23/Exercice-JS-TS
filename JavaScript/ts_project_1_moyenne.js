"use strict";
function calculerMoyenne(etudiant) {
    const somme = etudiant.notes.reduce((total, note) => total + note, 0);
    const moyenne = somme / etudiant.notes.length;
    return moyenne;
}
const Marco = { nom: "Marco", age: 22, notes: [15, 12, 18] };
const Luca = { nom: "Luca", age: 20, notes: [11, 19, 18] };
console.log("Moyenne Marco=", calculerMoyenne(Marco)); // affiche 15
console.log("Moyenne Luca=", calculerMoyenne(Luca));
function estAdmis(etudiant) {
    if (calculerMoyenne(etudiant) >= 10) {
        return true;
    }
    else {
        return false;
    }
}
console.log("Statut Marco:", estAdmis(Marco));
console.log("Statut Luca:", estAdmis(Luca));
function afficherBulletin(etudiant) {
    const moyenne = calculerMoyenne(etudiant);
    const admis = estAdmis(etudiant);
    console.log(`${etudiant.nom} (${etudiant.age} ans) - Moyenne : ${moyenne} - Admis : ${admis}`);
}
afficherBulletin(Marco);
afficherBulletin(Luca);
