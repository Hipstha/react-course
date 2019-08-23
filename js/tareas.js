

// Poo en JS

export default class Tarea{
    constructor( nombre, prioridad ){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de: ${this.prioridad}`;
    }
}

class ComprasPendientes extends Tarea{
    constructor( nombre, prioridad, cantidad ){
        super(nombre, prioridad); //SUper hace referencia al padre
        this.cantidad = cantidad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de: ${this.prioridad}
        y la cantidad de ${this.cantidad}`;
    }
}

//Objetos
let tarea1 = new Tarea('Aprender JS', 'Alta');

//console.log(tarea1.mostrar());

//COmpras

let compra1 = new ComprasPendientes('Jabón', 'Urgente', 3);
//console.log(compra1.mostrar());