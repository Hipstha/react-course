// Arreglos y .map

const carrito = ['producto1', 'producto2', 'producto3'];

console.log(carrito);

carrito.map(producto => {
    return 'EL producto es: ' + producto;
});

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 50
}

console.log(Object.keys(persona));