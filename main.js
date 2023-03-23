"use strict";
exports.__esModule = true;
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Persona_1 = require("./Persona");
var Telefono_1 = require("./Telefono");
function imprimirPersona(persona) {
    console.log("Nombre: " + persona.getNombre());
    console.log("Apellidos: " + persona.getApellidos());
    console.log("Edad: " + persona.getEdad());
    console.log("DNI: " + persona.getDNI());
    console.log("Cumpleaños: " + persona.getCumpleaños());
    console.log("Color favorito: " + persona.getColorFavorito());
    console.log("Sexo: " + persona.getSexo());
    console.log("Direcciones: ");
    for (var _i = 0, _a = persona.getDirecciones(); _i < _a.length; _i++) {
        var direccion = _a[_i];
        console.log("\tCalle: " + direccion.getCalle());
        console.log("\tNúmero: " + direccion.getNumero());
        console.log("\tPiso: " + direccion.getPiso());
        console.log("\tLetra: " + direccion.getLetra());
        console.log("\tCódigo Postal: " + direccion.getCodigoPostal());
        console.log("\tPoblación: " + direccion.getPoblacion());
        console.log("\tProvincia: " + direccion.getProvincia());
        console.log("\t------------------------------------------------");
    }
    console.log("Mails: ");
    for (var _b = 0, _c = persona.getMails(); _b < _c.length; _b++) {
        var mail = _c[_b];
        console.log("\tTipo: " + mail.getTipo());
        console.log("\tDirección: " + mail.getDireccion());
        console.log("\t------------------------------------------------");
    }
    console.log("Teléfonos: ");
    for (var _d = 0, _e = persona.getTelefonos(); _d < _e.length; _d++) {
        var telefono = _e[_d];
        console.log("\tTipo: " + telefono.getTipo());
        console.log("\tNúmero: " + telefono.getNumero());
        console.log("\t------------------------------------------------");
    }
    console.log("Notas: ");
    for (var _f = 0, _g = persona.getNotas(); _f < _g.length; _f++) {
        var nota = _g[_f];
        console.log("\t- " + nota);
    }
    console.log("========================================================");
}
var direccion1 = new Direccion_1.Direccion({
    calle: "Calle Stitch",
    numero: 1,
    piso: 1,
    letra: "A",
    codigoPostal: 12345,
    poblacion: "Villa Stitch",
    provincia: "Stitch"
});
var mail1 = new Mail_1.Mail({
    tipo: "correo electrónico personal",
    direccion: "ana@gmail.com"
});
var telefono1 = new Telefono_1.Telefono({
    tipo: "móvil",
    numero: 123456789
});
var persona1 = new Persona_1.Persona({
    nombre: "Ana",
    apellidos: "García",
    edad: 23,
    DNI: "30303030A",
    cumpleaños: "04/10/2000",
    colorFavorito: "rojo",
    sexo: "mujer",
    direcciones: [direccion1],
    mails: [mail1],
    telefonos: [telefono1],
    notas: ["Le gusta cantar"]
});
var direccion2 = new Direccion_1.Direccion({
    calle: "Calle Pikachu",
    numero: 2,
    piso: 2,
    letra: "B",
    codigoPostal: 67890,
    poblacion: "Villa Pikachu",
    provincia: "Pikachu"
});
var mail2 = new Mail_1.Mail({
    tipo: "correo electrónico corporativo",
    direccion: "juandelgado@gmail.com"
});
var telefono2 = new Telefono_1.Telefono({
    tipo: "fijo",
    numero: 957121212
});
var persona2 = new Persona_1.Persona({
    nombre: "Juan",
    apellidos: "Delgado",
    edad: 23,
    DNI: "40303030B",
    cumpleaños: "05/11/2000",
    colorFavorito: "azul",
    sexo: "hombre",
    direcciones: [direccion2],
    mails: [mail2],
    telefonos: [telefono2],
    notas: ["Le gusta jugar al fútbol", "Odia los insectos"]
});
var direccion3 = new Direccion_1.Direccion({
    calle: "Calle Pizza",
    numero: 3,
    piso: 3,
    letra: "C",
    codigoPostal: 13579,
    poblacion: "Villa Pizza",
    provincia: "Pizza"
});
var mail3 = new Mail_1.Mail({
    tipo: "correo electrónico promocional",
    direccion: "lapizzademiguel@gmail.com"
});
var telefono3 = new Telefono_1.Telefono({
    tipo: "móvil",
    numero: 987654321
});
var persona3 = new Persona_1.Persona({
    nombre: "Miguel",
    apellidos: "Nogales",
    edad: 23,
    DNI: "50303030C",
    cumpleaños: "06/12/2000",
    colorFavorito: "amarillo",
    sexo: "hombre",
    direcciones: [direccion3],
    mails: [mail3],
    telefonos: [telefono3],
    notas: []
});
var agenda = [persona1, persona2, persona3];
console.log("APARTADO A: Mostrar registros de Persona por consola\n");
for (var _i = 0, agenda_1 = agenda; _i < agenda_1.length; _i++) {
    var persona = agenda_1[_i];
    imprimirPersona(persona);
}
console.log("\n");
console.log("APARTADO B: Buscar persona por DNI y modificar\n");
var personaAModificar;
for (var _a = 0, agenda_2 = agenda; _a < agenda_2.length; _a++) {
    var persona = agenda_2[_a];
    if (persona.getDNI() === "40303030B") {
        personaAModificar = persona;
    }
}
console.log("Persona a modificar:");
if (!personaAModificar) {
    console.log("Not found");
}
else {
    imprimirPersona(personaAModificar);
    personaAModificar.addDireccion(new Direccion_1.Direccion({
        calle: "Calle Ranita",
        numero: 4,
        piso: 4,
        letra: "D",
        codigoPostal: 23579,
        poblacion: "Villa Ranita",
        provincia: "Ranita"
    }));
    personaAModificar.addTelefono(new Telefono_1.Telefono({
        tipo: "móvil",
        numero: 633987654
    }));
    personaAModificar.addMail(new Mail_1.Mail({
        tipo: "correo personal",
        direccion: "juanitodelgadito@gmail.com"
    }));
}
console.log("\n");
console.log("APARTADO C: Mostrar los 3 registros con los cambios realizados\n");
for (var _b = 0, agenda_3 = agenda; _b < agenda_3.length; _b++) {
    var persona = agenda_3[_b];
    imprimirPersona(persona);
}
