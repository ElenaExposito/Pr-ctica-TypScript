import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Persona } from "./Persona";
import { Telefono } from "./Telefono";

function imprimirPersona(persona: Persona) {
  console.log("Nombre: " + persona.getNombre());
  console.log("Apellidos: " + persona.getApellidos());
  console.log("Edad: " + persona.getEdad());
  console.log("DNI: " + persona.getDNI());
  console.log("Cumpleaños: " + persona.getCumpleaños());
  console.log("Color favorito: " + persona.getColorFavorito());
  console.log("Sexo: " + persona.getSexo());
  console.log("Direcciones: ");
  for (let direccion of persona.getDirecciones()) {
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
  for (let mail of persona.getMails()) {
    console.log("\tTipo: " + mail.getTipo());
    console.log("\tDirección: " + mail.getDireccion());
    console.log("\t------------------------------------------------");
  }
  console.log("Teléfonos: ");
  for (let telefono of persona.getTelefonos()) {
    console.log("\tTipo: " + telefono.getTipo());
    console.log("\tNúmero: " + telefono.getNumero());
    console.log("\t------------------------------------------------");
  }
  console.log("Notas: ");
  for (let nota of persona.getNotas()) {
    console.log("\t- " + nota);
  }
  console.log("========================================================");
}

const direccion1 = new Direccion({
  calle: "Calle Stitch",
  numero: 1,
  piso: 1,
  letra: "A",
  codigoPostal: 12345,
  poblacion: "Villa Stitch",
  provincia: "Stitch",
});

const mail1 = new Mail({
  tipo: "correo electrónico personal",
  direccion: "ana@gmail.com",
});

const telefono1 = new Telefono({
  tipo: "móvil",
  numero: 123456789,
});

const persona1 = new Persona({
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
  notas: ["Le gusta cantar"],
});

const direccion2 = new Direccion({
  calle: "Calle Pikachu",
  numero: 2,
  piso: 2,
  letra: "B",
  codigoPostal: 67890,
  poblacion: "Villa Pikachu",
  provincia: "Pikachu",
});

const mail2 = new Mail({
  tipo: "correo electrónico corporativo",
  direccion: "juandelgado@gmail.com",
});

const telefono2 = new Telefono({
  tipo: "fijo",
  numero: 957121212,
});

const persona2 = new Persona({
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
  notas: ["Le gusta jugar al fútbol", "Odia los insectos"],
});

const direccion3 = new Direccion({
  calle: "Calle Pizza",
  numero: 3,
  piso: 3,
  letra: "C",
  codigoPostal: 13579,
  poblacion: "Villa Pizza",
  provincia: "Pizza",
});

const mail3 = new Mail({
  tipo: "correo electrónico promocional",
  direccion: "lapizzademiguel@gmail.com",
});

const telefono3 = new Telefono({
  tipo: "móvil",
  numero: 987654321,
});

const persona3 = new Persona({
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
  notas: [],
});

const agenda = [persona1, persona2, persona3];

console.log("APARTADO A: Mostrar registros de Persona por consola\n");

for (let persona of agenda) {
  imprimirPersona(persona);
}

console.log("\n");
console.log("APARTADO B: Buscar persona por DNI y modificar\n");

let personaAModificar;

for (let persona of agenda) {
  if (persona.getDNI() === "40303030B") {
    personaAModificar = persona;
  }
}

console.log("Persona a modificar:");

if (!personaAModificar) {
  console.log("Not found");
} else {
  imprimirPersona(personaAModificar);
  personaAModificar.addDireccion(
    new Direccion({
      calle: "Calle Ranita",
      numero: 4,
      piso: 4,
      letra: "D",
      codigoPostal: 23579,
      poblacion: "Villa Ranita",
      provincia: "Ranita",
    })
  );
  personaAModificar.addTelefono(
    new Telefono({
      tipo: "móvil",
      numero: 633987654,
    })
  );
  personaAModificar.addMail(
    new Mail({
      tipo: "correo personal",
      direccion: "juanitodelgadito@gmail.com",
    })
  );
}

console.log("\n");
console.log("APARTADO C: Mostrar los 3 registros con los cambios realizados\n");

for (let persona of agenda) {
  imprimirPersona(persona);
}
