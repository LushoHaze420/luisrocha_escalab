var datos = {
    titulo: "Bienvenido a nuestra tienda de skate",
    descripcion: "Explora nuestra selección de artículos de skate de alta calidad."
};

var tituloElement = document.getElementById("titulo");
var descripcionElement = document.getElementById("descripcion");

tituloElement.textContent = datos.titulo;
descripcionElement.textContent = datos.descripcion;
// Hacer uso de una data