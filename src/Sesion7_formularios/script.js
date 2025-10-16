const form = document.getElementById('formRegistro');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const mensaje = document.getElementById('mensaje');
const telefono = document.getElementById('telefono');
const pais = document.getElementById('pais');
const terminos = document.getElementById('terminos');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nombre.value.trim() === '') {
    mostrarMensaje('El nombre es obligatorio', 'error');
  } else if (!validarNombre(nombre.value)) {
    mostrarMensaje('El nombre solo debe contener letras y espacios', 'error');
  } else if (!correo.value.includes('@')) {
    mostrarMensaje('El correo no es válido', 'error');
  } else if (password.value.length < 6) {
    mostrarMensaje('La contraseña debe tener al menos 6 caracteres', 'error');
  } else if (
    telefono.value.trim() === '' ||
    telefono.value.replace(/\D/g, '').length < 8
  ) {
    mostrarMensaje('El teléfono debe tener al menos 8 dígitos', 'error');
  } else if (pais.value === '') {
    mostrarMensaje('El país es obligatorio', 'error');
  } else if (!terminos.checked) {
    mostrarMensaje('Debes aceptar los términos y condiciones', 'error');
  } else {
    mostrarMensaje('Registro exitoso', 'exito');
    form.reset();
  }
});

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  if (tipo === 'error') {
    mensaje.style.color = 'red';
  } else {
    mensaje.style.color = 'green';
  }
}

correo.addEventListener('input', () => {
  if (!correo.value.includes('@')) {
    correo.style.borderColor = 'red';
  } else {
    correo.style.borderColor = 'green';
  }
});

nombre.addEventListener('input', () => {
  if (nombre.value.trim() !== '' && !validarNombre(nombre.value)) {
    nombre.style.borderColor = 'red';
  } else if (nombre.value.trim() !== '') {
    nombre.style.borderColor = 'green';
  } else {
    nombre.style.borderColor = '#ccc';
  }
});

function validarNombre(nombre) {
  // Solo permite letras (mayúsculas y minúsculas), espacios y acentos
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(nombre);
}
