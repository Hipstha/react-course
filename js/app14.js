const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    //Pasar la cantidad a la api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //Llamado ajax

    const xhr = new XMLHttpRequest();

    //abrir conexión
    xhr.open('GET', api, true);

    //on Load
    xhr.onload = () => {
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        }
    }

    //Opcional
    xhr.onerror = (error) => reject(error);

    //send
    xhr.send()
});

descargarUsuarios(30)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.log(
            new Error('Hubo un error' + error)
        )
    );

function imprimirHTML( usuarios ){
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                nombre: ${usuario.name.first} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen: 
                    <img src="${usuario.picture.medium}">
            </li>
        `;
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}