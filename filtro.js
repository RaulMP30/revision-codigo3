// Arreglo de productos
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Seleccionamos el contenedor de productos
const li = document.getElementById("lista-de-productos");

// Seleccionamos el input de búsqueda
const $i = document.querySelector(".input");

// Función para mostrar productos
function displayProductos(productos) {
  // Limpiamos el contenido actual
  li.innerHTML = "";

  // mensaje qye se muestra cuando no hay productos
  if (productos.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No se encontraron productos.";
    li.appendChild(mensaje);
    return;
  }

  // Recorremos los productos y los agregamos al DOM
  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  });
}

// Función que filtra según texto ingresado
const filtrado = (productos = [], texto) => {
  const textoLimpio = texto.trim().toLowerCase();

  return productos.filter(item =>
    item.tipo.toLowerCase().includes(textoLimpio) ||
    item.color.toLowerCase().includes(textoLimpio)
  );
};

// Evento del botón para filtrar
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.addEventListener("click", () => {
  const texto = $i.value;
  console.log("Texto buscado:", texto);

  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
});

// se muestran todos los productos al cargar
displayProductos(productos);