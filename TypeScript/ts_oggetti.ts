//Les Objets permettent de regrouper differente variable en une seule
// un objet comme une correspondance entre des clés (chiavi) et des valeurs (valori).
//Esempio
let pippo = {nome: "Ugo", eta: 19, capelli: true};
/*Objet = pippo

  Chiave(clé)       Valore(Valuer)
    nome                 "Ugo"
    eta                   19
  capelli               true */   
  
//Differente façons d'ecrire un objet
let pippo = {
    nome: "Ugo",
    eta: 19,
    capelli: true
};
//Les clés peuvent être ecrits entre guillemets 
let pippo = {
    "nome": "Ugo",
    "eta": 19,
    "capelli": true
};
//Objet vide
let pippo = {}; 

//Declarer le type d'un objet
let pippo: {nome: string, eta: number, capelli: boolean} = {
    nome: "Ugo",
    eta: 19,
    capelli: true
};

