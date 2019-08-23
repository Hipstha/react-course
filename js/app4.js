// Parametros por default en las funciones

function actividad( nombre = "Walter", actividad = "Enseñar Quimica" ){
    console.log(`La persona ${nombre}, esta realizando la actividad: ${actividad}`);
}

const activity = function( nombre, actividad){
    console.log(`La persona ${nombre}, esta realizando la actividad: ${actividad}`);
}

actividad('Juan', 'Aprender JS');
actividad('Pedro', 'Creando sitio web');
actividad();

console.log('---------------');
activity('Juan', 'Aprender JS');
activity('Pedro', 'Creando sitio web');
activity();