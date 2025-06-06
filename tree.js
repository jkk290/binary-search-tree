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
    
}