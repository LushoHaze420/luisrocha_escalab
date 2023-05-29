var persona = {
    nombre: "Juanito Perez",
    edad: 30,
    cargo: "Vendedor",
    hobbie: "Amante del Skate",
};

var datosPersonaElement = document.getElementById("datosPersona");

// Mapear y mostrar los datos en el DOM
Object.keys(persona).forEach(function(key) {
var p = document.createElement("p");
p.innerHTML = key + ": " + persona[key];
datosPersonaElement.appendChild(p);
});
