import { buildTree } from "./buildTree.js";
import { Node } from "./node.js";

export class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;

            return;
        }

        let currentNode = this.root;
        let previousNode = null;

        while (currentNode !== null) {
            if (currentNode.value === newNode.value) {
                return null;

            } else if (currentNode.value < newNode.value) {
                previousNode = currentNode;
                currentNode = currentNode.right;

            } else if (currentNode.value > newNode.value) {
                previousNode = currentNode;
                currentNode = currentNode.left;

            }
        }

        if (previousNode.value < newNode.value) {
            previousNode.right = newNode;
            return;

        } else if (previousNode.value > newNode.value) {
            previousNode.left = newNode;
            return;

        }

    }

    deleteItem(value) {
        if (this.root === null) {
            return null;
        }

        let currentNode = startingNode;
        let previousNode = null;

        while (currentNode !== null && currentNode.value !== value) {
            if (currentNode.value > value) {
                previousNode = currentNode;
                currentNode = currentNode.left;

            } else if (currentNode.value < value) {
                previousNode = currentNode;
                currentNode = currentNode.right;

            }

        }

        if (currentNode === null) {
            return null;
        }

        if (previousNode === null) {
            if (currentNode.left === null && currentNode.right === null) {
                this.root = null;
                return;

            } else if (currentNode.left !== null && currentNode.right === null) {
                this.root = currentNode.left;
                return;

            } else if (currentNode.left === null && currentNode.right !== null) {
                this.root = currentNode.right;
                return;

            } else {
                let replacement = this.findMinNode(currentNode.right);

                currentNode.value = replacement.value;
                
                return;
            }

        } else {
            if (currentNode.left === null && currentNode.right === null) {
                if (previousNode.value > currentNode.value) {
                    previousNode.left = null;
                    return;

                } else if (previousNode.value < currentNode.value) {
                    previousNode.right = null;
                    return;

                }

            } else if (currentNode.left !== null && currentNode.right === null) {
                if (previousNode.value > currentNode.value) {
                    previousNode.left = currentNode.left;
                    return;

                } else if (previousNode.value < currentNode.value) {
                    previousNode.right = currentNode.left;
                    return;

                }

            } else if (currentNode.left === null && currentNode.right !== null) {
                if (previousNode.value > currentNode.value) {
                    previousNode.left = currentNode.right;
                    return;

                } else if (previousNode.value < currentNode.value) {
                    previousNode.right = currentNode.right;
                    return;

                }

            } else {
                let replacement = this.findMinNode(currentNode.right);

                currentNode.value = replacement.value;

                return;

            }

        }

        
    }

    findMinNode(node) {
        if (node === null) {
            return null;

        }

        let currentNode = node;

        while (currentNode.left !== null) {
            currentNode = currentNode.left;

        }

        return currentNode;

    }
    
}