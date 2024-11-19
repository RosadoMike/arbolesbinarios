// Recorrido en Amplitud (Por niveles)
export function amplitud(tree) {
    if (!tree.root) return [];
    const queue = [tree.root];
    const result = [];
    while (queue.length > 0) {
        const node = queue.shift(); // Extraemos el primer nodo
        result.push(node.value);    // Añadimos su valor al resultado
        if (node.children.length > 0) {
            queue.push(...node.children); // Encola todos los hijos (n-ario)
        } else {
            // Encola los hijos binarios
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return result;
}

// Recorrido en Preorden
export function preorden(node, result = []) {
    if (!node) return result;
    result.push(node.value); // Visitamos el nodo actual
    if (node.children.length > 0) {
        node.children.forEach(child => preorden(child, result)); // Recursión n-aria
    } else {
        preorden(node.left, result);  // Recursión binaria (hijo izquierdo)
        preorden(node.right, result); // Recursión binaria (hijo derecho)
    }
    return result;
}

export function inorden(node, result = []) {
    if (!node) return result;
    if (node.children && node.children.length > 0) {
        // Lógica para árboles n-arios
        const mid = Math.floor(node.children.length / 2); // Divide los hijos en dos partes
        // Procesa los hijos "izquierdos" (primera mitad de los hijos)
        for (let i = 0; i < mid; i++) {
            inorden(node.children[i], result);
        }
        result.push(node.value); // Procesa la raíz
        // Procesa los hijos "derechos" (segunda mitad de los hijos)
        for (let i = mid; i < node.children.length; i++) {
            inorden(node.children[i], result);
        }
    } else {
        // Lógica para árboles binarios
        inorden(node.left, result);  // Hijo izquierdo
        result.push(node.value);     // Nodo actual
        inorden(node.right, result); // Hijo derecho
    }

    return result;
}


// Recorrido en Postorden
export function postorden(node, result = []) {
    if (!node) return result;
    if (node.children.length > 0) {
        node.children.forEach(child => postorden(child, result)); // Recursión n-aria
    } else {
        postorden(node.left, result);  // Hijo izquierdo (binario)
        postorden(node.right, result); // Hijo derecho (binario)
    }
    result.push(node.value); // Nodo actual
    return result;
}
