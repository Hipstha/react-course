// crear variables

//Variables Var
var aprendiendo = 'Javascript';

//Variables const
//Seleccionar elementos
const aprendiendoC = 'JavaScript';
aprendiendo = true;

//Variables LET
let aprendiendoL = 'JS';
aprendiendo = true;

//SCOPE, donde esta disponible y donde no
var musica = 'Rock';
if(musica){
    var musica = 'Grunge';
    console.log('Dentro del if', musica);
}


console.log('Fuera del if', musica);

// Scope con let

let musica2 = 'Rock';
if(musica2){
    let musica2 = 'Grunge';
    console.log('Dentro del if', musica2);
}
console.log('Fuera del if', musica2);

 