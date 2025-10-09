// Primeras variables
let nombre = 'Sofia';
const edad = 20;
let ciudad = 'Cochabamba';

console.log('Hola, mi nombre es ', nombre);
console.log('Tengo ', edad, ' años y vivo en ', ciudad);

// Operaciones matemáticas básicas
let numero1 = 10;
let numero2 = 3;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

console.log('Suma:', suma);
console.log('Resta:', resta);
console.log('Multiplicación:', multiplicacion);
console.log('División:', division);

//Condiciones
let edadUsuario = 17;

if (edadUsuario >= 18) {
  console.log('Puedes ingresar al sistema.');
} else {
  console.log('Acceso denegado.');
}

// Ciclos
for (let i = 1; i <= 5; i++) {
  console.log('Número:', i);
}

// Arreglos y métodos
let frutas = ['manzana', 'pera', 'uva', 'naranja', 'mandarina'];
console.log('Lista de frutas:');
for (let fruta of frutas) {
  console.log(fruta);
}

// metodos modernos de arreglos
let numeros = [2, 4, 6, 8, 10];
let dobles = numeros.map((n) => n * 2);
let pares = numeros.filter((n) => n % 2 === 0);
let sumaTotal = numeros.reduce((acc, n) => acc + n, 0);

console.log('Dobles:', dobles);
console.log('Solo pares:', pares);
console.log('Suma total:', sumaTotal);

// Objetos y funciones
let persona = {
  nombre: 'Carlos',
  edad: 25,
  ciudad: 'La Paz',
  profesion: 'Desarrollador',
};

console.log(
  `Hola, soy ${persona.nombre}, tengo ${persona.edad} años y trabajo como ${persona.profesion}.`
);

// Funciones personalizadas
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar('Lucia'));

// funciones flecha
const multiplicar = (a, b) => a * b;

console.log('Resultado:', multiplicar(4, 6));
