import React from 'react';

function Header( {titulo} ) {

    console.log({titulo})

    const edad = 17;
    let mensaje;
    edad >= 18 ? mensaje = "Eres mayor de edad" : mensaje = "Eres menor de edad";

    return (
        <h1 id="encabezado" className="encabezado">{ titulo }</h1>
    )

}

export default Header;