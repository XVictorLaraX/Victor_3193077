// Lista de productos disponibles en la tienda
var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];

// Carrito de compras (arreglo vacío)
var carrito = [];

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione una opción:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Agregar nuevo producto\n";
    menu += (productos.length + 3) + ". Salir\n";
    return menu;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

// Función para agregar un nuevo producto a la lista
function agregarNuevoProducto() {
    var nombreNuevoProducto = prompt("Ingrese el nombre del nuevo producto:");
    var precioNuevoProducto = parseFloat(prompt("Ingrese el precio del nuevo producto:"));

    if (nombreNuevoProducto && !isNaN(precioNuevoProducto) && precioNuevoProducto > 0) {
        productos.push({ nombre: nombreNuevoProducto, precio: precioNuevoProducto });
        console.log('Producto "' + nombreNuevoProducto + '" agregado con éxito.');
    } else {
        console.log("Entrada no válida. Asegúrese de ingresar un nombre y un precio correcto.");
    }
}

// Bucle principal de la tienda
var opcion;
do {
    opcion = prompt(mostrarMenu());

    // Convertir la opción ingresada a un número
    opcion = Number(opcion);

    // Verificar si la opción es válida
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 3) {
        console.log("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        // Si la opción es válida y corresponde a un producto, agregar al carrito
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        // Si elige ver el carrito y el total
        mostrarCarritoYTotal();
    } else if (opcion === productos.length + 2) {
        // Si elige agregar un nuevo producto
        agregarNuevoProducto();
    }
} while (opcion !== productos.length + 3); // El bucle continúa hasta que elige "Salir"

console.log("Gracias por visitar la tienda.");
