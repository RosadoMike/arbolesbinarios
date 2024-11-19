import { Node } from "./nodo.js";
import { BinaryTree } from "./arbol.js";
import { NaryTree } from './arbol.js';

// Árbol 1 (Binario)
export const arbol1 = new BinaryTree();
arbol1.root = new Node("h");
arbol1.root.left = new Node("i");
arbol1.root.right = new Node("m");
arbol1.root.left.right = new Node("e");
arbol1.root.right.left = new Node("a");

// Crear el Árbol Binario 2
export const arbol2 = new BinaryTree();
arbol2.root = new Node("F"); // Raíz
arbol2.root.left = new Node("B");
arbol2.root.right = new Node("G");
arbol2.root.left.left = new Node("A");
arbol2.root.left.right = new Node("D");
arbol2.root.left.right.left = new Node("C");
arbol2.root.left.right.right = new Node("E");
arbol2.root.right.right = new Node("I");
arbol2.root.right.right.left = new Node("H");


//crear arbol binario3
export const arbol3 = new BinaryTree();
arbol3.root = new Node(55); // Raíz
arbol3.root.left = new Node(53);
arbol3.root.right = new Node(59);
arbol3.root.left.left = new Node(48);
arbol3.root.left.right = new Node(54);
arbol3.root.left.left.right = new Node(51);
arbol3.root.right.left = new Node(56);
arbol3.root.right.right = new Node(63);
arbol3.root.right.left.right = new Node(57);
arbol3.root.right.right.left = new Node(61);
arbol3.root.right.right.right = new Node(70);


// Árbol 4 (N-Ario)
export const arbol4 = new NaryTree();
arbol4.root = new Node("A");

// Nodos del Árbol 4
const nodoB = new Node("B");
const nodoC = new Node("C");
const nodoD = new Node("D");
const nodoE = new Node("E");
const nodoF = new Node("F");
const nodoG = new Node("G");
const nodoH = new Node("H");
const nodoI = new Node("I");
const nodoJ = new Node("J");
const nodoK = new Node("K");
const nodoL = new Node("L");
const nodoM = new Node("M");
const nodoN = new Node("N");
const nodoÑ = new Node("Ñ");
const nodoO = new Node("O");
const nodoP = new Node("P");
const nodoQ = new Node("Q");
const nodoR = new Node("R");

// Construcción del Árbol 4
arbol4.root.children.push(nodoB, nodoC); // A -> B, C
nodoB.children.push(nodoD, nodoE, nodoF); // B -> D, E, F
nodoC.children.push(nodoG, nodoH, nodoI); // C -> G, H, I
nodoE.children.push(nodoJ, nodoK); // E -> J, K
nodoG.children.push(nodoL, nodoM, nodoN); // G -> L, M, N
nodoH.children.push(nodoÑ, nodoO, nodoP); // H -> Ñ, O, P
nodoJ.children.push(nodoQ); // J -> Q
nodoK.children.push(nodoR); // K -> R



// Crear el Árbol Binario 5
export const arbol5 = new BinaryTree();
arbol5.root = new Node("A"); // Raíz
// Nivel 1
arbol5.root.left = new Node("B");
arbol5.root.right = new Node("C");
// Nivel 2
arbol5.root.left.left = new Node("D");
arbol5.root.left.right = new Node("E");
arbol5.root.right.left = new Node("F");
arbol5.root.right.right = new Node("G");
// Nivel 3
arbol5.root.left.left.left = new Node("H");
arbol5.root.left.left.right = new Node("I");
arbol5.root.left.right.left = new Node("J");
arbol5.root.left.right.right = new Node("K");
arbol5.root.right.left.left = new Node("L");
arbol5.root.right.left.right = new Node("M");
arbol5.root.right.right.left = new Node("N");
arbol5.root.right.right.right = new Node("O");
// Nivel 4
arbol5.root.right.right.right.left = new Node("X"); // X es hijo izquierdo de O
// Nivel 5
arbol5.root.right.right.right.left.right = new Node("Y"); // Y es hijo de



// Lista de árboles exportada
export const arboles = [
    { id: 1, tree: arbol1 },
    { id: 2, tree: arbol2 },
    { id: 3, tree: arbol3 },
    { id: 4, tree: arbol4 }, // Árbol N-Ario agregado
    { id: 5, tree: arbol5 },
];
