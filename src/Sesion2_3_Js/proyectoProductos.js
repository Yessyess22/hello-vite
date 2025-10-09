let productos = [];

function agregarProducto(nombre, precio) {
  productos.push({ nombre, precio });
  console.log(`Producto ${nombre} agregado correctamente.`);
}

function listarProductos() {
  console.log('Lista de productos:');
  productos.forEach((p, index) => {
    console.log(`${index + 1}. ${p.nombre} - $${p.precio}`);
  });
}

function eliminarProducto(nombre) {
  productos = productos.filter((p) => p.nombre !== nombre);
  console.log(`Producto ${nombre} eliminado correctamente.`);
}

// Ejemplo de uso
agregarProducto('Laptop', 800);
agregarProducto('Mouse', 25);
listarProductos();
eliminarProducto('Mouse');
listarProductos();
