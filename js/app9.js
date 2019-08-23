// metodo o funciones en objeto

const persona = {
    nombre: 'Juan',
    trabajo: 'Desarrollador',
    edad: 50,
    musicaRock: true,
    mostrarInformacion: function(){
        console.log(`${this.nombre} es ${this.tranajo} 
        y su edad es de ${this.edad}`);
    }
}

persona.mostrarInformacion();