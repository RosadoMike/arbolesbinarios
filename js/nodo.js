// Clase Nodo
export class Node {
    constructor(value) {
        this.value = value;
        this.children = []; // Lista de hijos (para n-arios)
        this.left = null;   // Hijo izquierdo (para binarios)
        this.right = null;  // Hijo derecho (para binarios)
    }

    // Método para agregar hijos (n-ario)
    addChild(node) {
        this.children.push(node);
    }
}
