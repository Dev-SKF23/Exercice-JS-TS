let temperature: number[]= [];
for(let i=0; i<7; i++){
    temperature.push(Number(prompt(`temperature del giorno ${i+1}`)));
}
console.log(temperature) 

let tempAlte:number = 0;
for(let t of temperature){
    if (t >= 32) tempAlte++;
}
console.log(tempAlte)