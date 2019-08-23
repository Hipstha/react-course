// Destroctoring de objetos
const aprendiendoJS = {
    version: {
        nueva: 'ES5',
        anterior: 'ES4'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

//Extraer valores del objeto

console.log(aprendiendoJS);

//Version anterior
// let version = aprendiendoJS.version.nueva;
// let fw = aprendiendoJS.frameworks;

// Destructuring forma nueva
 let { version, frameworks } = aprendiendoJS;
 console.log(version);
 console.log(frameworks);
