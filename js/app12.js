//Metodos en arreglos

const personas = [
    {
        nombre: 'Juan',
        edad: 50,
        aprendiendo: 'JS'
    },
    {
        nombre: 'Pablo',
        edad: 40,
        aprendiendo: 'php'
    },
    {
        nombre: 'Brenda',
        edad: 30,
        aprendiendo: 'java'
    },
    {
        nombre: 'Liz',
        edad: 20,
        aprendiendo: 'python'
    },
    {
        nombre: 'Fer',
        edad: 18,
        aprendiendo: 'react'
    }
];

console.log(personas);

// mayores de 30 años

const mayores = personas.filter(persona => {
    return persona.edad > 28;
});

console.log(mayores);

//Que aprende Brenda
const brenda = personas.find(persona => {
    return persona.nombre === 'Brenda';
});
console.log('brenda está aprendiendo: ' + brenda.aprendiendo);

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total / personas.length);