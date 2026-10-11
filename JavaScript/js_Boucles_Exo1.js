/*Exercice A : Affiche tous les nombres de 1 à 10 avec une boucle for. */
for (let i=1; i<=10; i++){
    console.log("Les valeurs sont:", i)
}

/*Exercice B : Affiche uniquement les nombres pairs de 1 à 20 avec une 
boucle for (réutilise ce qu'on a vu sur le modulo %). */
for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i, "Est pair")
    }
}
/*Exercice C : Calcule la somme des nombres de 1 à 100 (donc 1+2+3+...+100) 
en utilisant une boucle while, et affiche le résultat final avec console.log*/
let i = 1;        
let somme = 0;    
while (i <= 10) {
  somme = somme + i;   
  i++;               
}
console.log("La somme est :", somme);

/*Exercice D (un peu plus stimulant) : Affiche la table de multiplication de 
7 (de 7×1 à 7×10) en utilisant une boucle for, sous la forme :*/
for(i=1; i<=10; i++){
    console.log("7 x", i ,"=",7*i)
}



