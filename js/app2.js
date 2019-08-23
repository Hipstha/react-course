// Template String

const nombre = 'Juan';
const trabajo = 'Desarrollador Web';

//Concatenar JS
console.log('Nombre: ' + nombre + ", Trabajo: " + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//Concatenar con multiples líneas
const contenedorApp = document.querySelector('#app');
// let html = '<ul>'+
//                 '<li>Nombre: '+ nombre +'</li>'+
//                 '<li>Trabajo: '+ trabajo +'</li>'+
//             '</ul>';

let html = `
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Trabajo: ${trabajo}</li>
    </ul>
`;

contenedorApp.innerHTML = html;