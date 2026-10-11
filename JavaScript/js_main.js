console.log("Hello World!");
const constante = 3;
let variable = 5;

console.log("Constante =" ,constante ,";");
console.log("Variable =", variable);

variable = 10

console.log("Nouvelle Variable =" ,variable);

let bool = true;
let bool2 = false;

console.log(bool);
console.log(bool2);

let variable2 = null;
let variable3

console.log(variable2);

let objet = {};
objet = {bool, variable, phrase:"Bonjour", number: 5}
console.log(objet); 
console.log(objet.phrase);

objet.phrase = "oui"

console.log(objet.phrase);

if ("2"== 2){
    console.log("vrai")
}
else{
    console.log("faux");
} 


let array = ["phrase", "tuto", 50]

    //Déepart //Condition
for (let i=0; i< array.length; i++){
    console.log(array[i])
}
console.log(array)

function toto(){
    console.log("Salut moi c'est toto");
}
toto(); 

function returnChiffre(){
    return 5
}

console.log (returnChiffre());  