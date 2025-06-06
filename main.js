import { Tree } from "./tree.js";
import { prettyPrint } from "./prettyPrint.js";

let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let myTree = new Tree(testArray);

let rootNode = myTree.root;

prettyPrint(rootNode);

myTree.insert(66);

prettyPrint(rootNode);

myTree.deleteItem(8);
myTree.deleteItem(1);
myTree.deleteItem(5);
myTree.deleteItem(7);


prettyPrint(rootNode);