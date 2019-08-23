//Creando funciones

function saludar(nombre){
    console.log('Bienvenido: ' + nombre);
}

saludar('Juan');

//Funcion expression

const cliente = function(nombreCliente){
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

cliente('Juan');