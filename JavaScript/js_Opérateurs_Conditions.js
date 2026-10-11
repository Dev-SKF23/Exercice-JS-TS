let a =10;
let b =3;

//1 Operateurs Arithmetiques

console.log(a+b); //addition → 13
console.log(a-b); //soustraction → 7
console.log(a*b); //multiplication → 30
console.log(a/b); //division → 3.333333333
console.log(a%b); //modulo (reste de divion) → 1

//2 Operateurs de comparaison

console.log(5 =="5"); //true compare seulement la Valeur (coversion automatique)
console.log(5 ==="5") //false compare a valeur et le type (pas de conversion)

console.log(5!="5");  //false
console.log(5!=="5"); //true

console.log(a>b);  //superieur à
console.log(a<b);  //inferieur à
console.log(a>=b); //superieur ou égal
console.log(a<=b); //inferieur ou égal

//3 Operateurs logiques

let estMajeur = true;
let aPermis = false;

console.log(estMajeur && aPermis); //ET logique → false
console.log(estMajeur || aPermis); //OU logique → true
console.log(!estMajeur);

//4 Les conditions

let age = 17;
if (age >= 18){
    console.log("Tu es majeur");
}else if (age >= 13){
    console.log("Tu es adolescent");
}else{
    console.log("Tu es enfant");
}

//5 Operateur ternaire

let age = 20;
let statut = (age >= 18)? "majeur" : "mineur";
console.log(statut); //affiche majeur 








