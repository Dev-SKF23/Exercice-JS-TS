//for
for (let i = 0; i<5; i++){ 
    console.log(i)
}

//while
let n = 0; 
while(n<5){
    console.log(n);
    n++; 
} 

//do...while
let i = 10; 
do{
    console.log(i); 
    i++; 
}while(i<5);

//for...of (il fonctionne sur les tableaux et aussi sur les chaines, lettre par lettre)
//for...of ideal pour parcourir les element du tableau 
let noms: string[]=["Matt", "Alice", "Bob"];
for (const nom of noms){
    console.log(nom); 
}

//for...in  (ideal pour parcourir les indice d'un tableau)
for(const i in noms){
    console. log(i, noms[i]);
}


/*// (A)
for (let i = 2; i <= 8; i += 3) {
    console.log(i);
}

// (B)
let n = 3;
while (n > 0) {
    console.log(n);
    n--;
}

// (C)
for (const x of [5, 8, 12]) {
    console.log(x * 2);
}*/


/*Alors pour le A ce que nous aurons a l'interpretation c'est que 
tout d'abord le i est initialiser a 2 ce qui veux dire d'indice 2 et donc vu que 
l'incrementation est  de 3 et la condition c'est que i est inf ou egale a 8 alors vue que nous avons 
l'indice 2 c qui signifie que la boucle commence 3 parce que la conditon c'est de 1 à 8 et l'indice c'est 2
du coup nous aurons comme resultat 2 chiffre qui sont 3 et 6*/

/*pour le B donc l'initialisation est de n=3 et la conditon 
c'est que n soit sup a 0 et ici il s'agit de la decrementation pas de l'incrementation 
alors ce que nous aurons comme resultat c'est la decrementationnde 3 a 1 et non 0 parce que
 la condtion n'est pas n sup ou egal mais strict sup a 0 du du coup nous aurons 3, 2, 1*/

 /*Alors pour le C ce que nous aurons comme resultat le tableau sera multipliser par 2 ce qui signifie que tous les element du tableau serons multiplier par 2 tu vois un peu? */


