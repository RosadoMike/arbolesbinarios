import { arboles } from "./arboles.js";
import { amplitud, preorden, inorden, postorden } from "./recorrido.js";
    

// Asociamos imágenes a los árboles
const imagenesArboles = {
    1: "./imagenes/arbol1.jpg",
    2: "./imagenes/arbol2.jpg",
    3: "./imagenes/arbol3.jpg",
    4: "./imagenes/arbol4.jpg",
    5: "./imagenes/arbol5.jpg",
};
// Elementos del DOM
const arbolSelect = document.getElementById("arbolSelect");
const recorridoSelect = document.getElementById("recorridoSelect");
const recorrerBtn = document.getElementById("recorrerBtn");
const resultado = document.getElementById("resultado");
const arbolContainer = document.getElementById("arbol-container");

// Manejador del botón de recorrido
recorrerBtn.addEventListener("click", () => {
    const arbolId = parseInt(arbolSelect.value);
    const recorridoTipo = recorridoSelect.value;
    const arbol = arboles.find(a => a.id === arbolId);

    if (!arbol) {
        resultado.textContent = "Árbol no encontrado.";
        return;
    }

    let resultadoRecorrido;
    switch (recorridoTipo) {
        case "amplitud":
            resultadoRecorrido = amplitud(arbol.tree);
            break;
        case "preorden":
            resultadoRecorrido = preorden(arbol.tree.root);
            break;
        case "inorden":
            resultadoRecorrido = inorden(arbol.tree.root);
            break;
        case "postorden":
            resultadoRecorrido = postorden(arbol.tree.root);
            break;
        default:
            resultadoRecorrido = "Tipo de recorrido no válido.";
    }

    resultado.textContent = `Resultado (${recorridoTipo}): ${resultadoRecorrido.join(" → ")}`;
});


// Función para mostrar la imagen del árbol seleccionado
function mostrarImagenArbol(arbolId) {
    const imagenSrc = imagenesArboles[arbolId];

    arbolContainer.innerHTML = ""; // Limpia el contenedor

    if (imagenSrc) {
        const imgElement = document.createElement("img");
        imgElement.src = imagenSrc;
        imgElement.alt = `Árbol ${arbolId}`;
        imgElement.className = "arbol-imagen";
        arbolContainer.appendChild(imgElement);
    } else {
        arbolContainer.textContent = "No hay imagen para este árbol.";
    }
}

// Manejador para cambiar la imagen al seleccionar un árbol
arbolSelect.addEventListener("change", () => {
    const arbolId = parseInt(arbolSelect.value);
    mostrarImagenArbol(arbolId); // Muestra la imagen fija del árbol seleccionado
});

mostrarImagenArbol(1);