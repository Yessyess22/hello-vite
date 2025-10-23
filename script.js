// Referencias a los elementos del DOM
const form = document.getElementById('formRegistro');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const edad = document.getElementById('edad');
const password = document.getElementById('password');
const mensajeGeneral = document.getElementById('mensajeGeneral');

// Referencias a los elementos de error
const errorNombre = document.getElementById('errorNombre');
const errorCorreo = document.getElementById('errorCorreo');
const errorEdad = document.getElementById('errorEdad');
const errorPassword = document.getElementById('errorPassword');

// Funciones de validación
function validarNombre(valor) {
  if (valor.trim() === '') {
    return 'El nombre es obligatorio';
  }
  if (valor.trim().length < 2) {
    return 'El nombre debe tener al menos 2 caracteres';
  }
  return '';
}

function validarCorreo(valor) {
  if (valor.trim() === '') {
    return 'El correo es obligatorio';
  }
  if (!valor.includes('@')) {
    return 'El correo debe contener el símbolo "@"';
  }

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(valor)) {
    return 'El formato del correo no es válido';
  }
  return '';
}

function validarEdad(valor) {
  if (valor.trim() === '') {
    return 'La edad es obligatoria';
  }
  const edadNum = parseInt(valor);
  if (isNaN(edadNum)) {
    return 'La edad debe ser un número';
  }
  if (edadNum <= 18) {
    return 'Debes ser mayor de 18 años';
  }
  if (edadNum > 120) {
    return 'Ingresa una edad válida';
  }
  return '';
}

function validarPassword(valor) {
  if (valor.trim() === '') {
    return 'La contraseña es obligatoria';
  }
  if (valor.length <= 6) {
    return 'La contraseña debe tener más de 6 caracteres';
  }
  return '';
}

// Mostrar/ocultar mensajes de error
function mostrarError(elemento, mensaje) {
  const input = elemento.previousElementSibling;
  if (mensaje) {
    elemento.textContent = mensaje;
    input.classList.add('error');
    input.classList.remove('success');
  } else {
    elemento.textContent = '';
    input.classList.remove('error');
    input.classList.add('success');
  }
}

function mostrarMensajeGeneral(mensaje, tipo) {
  mensajeGeneral.textContent = mensaje;
  mensajeGeneral.className = `mensaje-general ${tipo}`;
}

nombre.addEventListener('input', () => {
  const error = validarNombre(nombre.value);
  mostrarError(errorNombre, error);
});

correo.addEventListener('input', () => {
  const error = validarCorreo(correo.value);
  mostrarError(errorCorreo, error);
});

edad.addEventListener('input', () => {
  const error = validarEdad(edad.value);
  mostrarError(errorEdad, error);
});

password.addEventListener('input', () => {
  const error = validarPassword(password.value);
  mostrarError(errorPassword, error);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Valida todos los campos
  const errorNombreMsg = validarNombre(nombre.value);
  const errorCorreoMsg = validarCorreo(correo.value);
  const errorEdadMsg = validarEdad(edad.value);
  const errorPasswordMsg = validarPassword(password.value);

  // Muestra errores
  mostrarError(errorNombre, errorNombreMsg);
  mostrarError(errorCorreo, errorCorreoMsg);
  mostrarError(errorEdad, errorEdadMsg);
  mostrarError(errorPassword, errorPasswordMsg);

  // Verifica si hay errores
  const hayErrores =
    errorNombreMsg || errorCorreoMsg || errorEdadMsg || errorPasswordMsg;

  if (hayErrores) {
    mostrarMensajeGeneral(
      'Por favor, corrige los errores antes de continuar',
      'error'
    );
  } else {
    // Formulario válido
    mostrarMensajeGeneral(
      '¡Registro exitoso! Todos los datos son válidos',
      'exito'
    );

    // Resetea el formulario después de un delay
    setTimeout(() => {
      form.reset();
      document.querySelectorAll('input').forEach((input) => {
        input.classList.remove('success', 'error');
      });
      document.querySelectorAll('.mensaje-error').forEach((error) => {
        error.textContent = '';
      });
      mensajeGeneral.textContent = '';
      mensajeGeneral.className = 'mensaje-general';
    }, 3000);
  }
});

// Función para limpiar estilos al perder el foco si el campo está vacío
function limpiarEstilosSiVacio(input, errorElement) {
  input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
      input.classList.remove('error', 'success');
      errorElement.textContent = '';
    }
  });
}

// Aplicar la función a todos los campos
limpiarEstilosSiVacio(nombre, errorNombre);
limpiarEstilosSiVacio(correo, errorCorreo);
limpiarEstilosSiVacio(edad, errorEdad);
limpiarEstilosSiVacio(password, errorPassword);
