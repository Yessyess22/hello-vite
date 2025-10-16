console.log('¡Hola desde JavaScript!');

const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const botonColor = document.getElementById('botonColor');
const botonTexto = document.getElementById('botonTexto');
const entrada = document.getElementById('entrada');
const saludo = document.getElementById('saludo');

titulo.textContent = '¡Bienvenido al mundo del DOM!';
descripcion.style.color = 'gray';

botonColor.addEventListener('click', () => {
  document.body.style.backgroundColor = color;
});

botonTexto.addEventListener('click', () => {
  titulo.textContent = '¡El texto ha cambiado gracias a tu clic!';
});

entrada.addEventListener('input', () => {
  const nombre = entrada.value;
  saludo.textContent = `¡Hola, ${nombre}!`;
});

const botonTamano = document.createElement('button');
botonTamano.textContent = 'Aumentar tamaño del texto';
document.body.appendChild(botonTamano);

botonTamano.addEventListener('click', () => {
  titulo.style.fontSize = '2.5rem';
});

titulo.addEventListener('dblclick', () => {
  titulo.style.color = 'purple';
});

let contador = 0;
botonColor.addEventListener('click', () => {
  contador++;
  console.log(`Has hecho clic ${contador} veces.`);
});
