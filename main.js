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

console.log(myTree.find(66));
console.log(myTree.find(432));
console.log(myTree.find(9));

myTree.levelOrder((node) => {
    console.log(node.value);
})

// myTree.levelOrder('This should give me an error!');

myTree.inOrder((node) => {
    console.log(node.value);
})

// myTree.inOrder('This should give me an error!');

myTree.preOrder((node) => {
    console.log(node.value);
})

// myTree.preOrder('This should give me an error!');

myTree.postOrder((node) => {
    console.log(node.value);
})

// myTree.postOrder('This should give me an error!');

console.log(myTree.height(9));
console.log(myTree.height(8));
console.log(myTree.height(66));

console.log(myTree.depth(9));
console.log(myTree.depth(8));
console.log(myTree.depth(66));

console.log(myTree.isBalanced());

myTree.insert(9482);
myTree.insert(9932);
console.log(myTree.isBalanced());
prettyPrint(rootNode);
