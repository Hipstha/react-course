//Objetos

// Literal

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 22
}

let nombrePersona = 'Juan';
let profesion = 'Desarrollador web';

// console.log(nombrePersona);
// console.log(profesion);

console.log(persona);

//Object Constructor
function Tarea( nombre, urgencia ){
    this.nombre = nombre;
    this.urgencia = urgencia;
}
//Agregar prototype a tarea
Tarea.prototype.mostrarInformacionTarea = function (){
    return `La tarea ${this.tarea}, tiene una prioridad de: ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender Javascript', 'Urgente');
console.log(tarea1.mostrarInformacionTarea());


