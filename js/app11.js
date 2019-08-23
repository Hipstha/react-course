// Sprear Operator...

let lenguajes = ['Js', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];

//UNir arreglos en uno solo


// let combinacion = lenguajes.concat(frameworks);

let combinacion = [...lenguajes,...frameworks];

let [ultimo] = [...lenguajes].reverse();

console.log(lenguajes);
console.log(ultimo);

function suma( a, b, c ){
    console.log(a+b+c);
}

const numeros = [1,2,3];

suma(...numeros);
