//Arrow function

let viajando = function( destino ){
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje = viajando('Monterrey');
console.log(viaje);

let travel = (destino) => `Viajando a la ciudad de: ${destino}`;

let trip = travel('Londres');
console.log(trip);