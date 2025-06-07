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

        let currentNode = this.root;
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

                let replacementNode = currentNode.right;
                let parentOfReplacement = currentNode;

                while (replacementNode.left !== null) {
                    parentOfReplacement = replacementNode;
                    replacementNode = replacementNode.left;

                }

                if (parentOfReplacement === currentNode) {
                    parentOfReplacement.right = replacementNode.right;
                    return;

                } else {
                    parentOfReplacement.left = replacementNode.right;
                    return;
                }

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

                let replacementNode = currentNode.right;
                let parentOfReplacement = currentNode;

                while (replacementNode.left !== null) {
                    parentOfReplacement = replacementNode;
                    replacementNode = replacementNode.left;

                }

                if (parentOfReplacement === currentNode) {
                    parentOfReplacement.right = replacementNode.right;
                    return;

                } else {
                    parentOfReplacement.left = replacementNode.right;
                    return;
                }
                
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

    find(value) {
        if (this.root === null) {
            return null;
        }

        let currentNode = this.root;

        while (currentNode !== null && currentNode.value !== value) {
            if (currentNode.value < value) {
                currentNode = currentNode.right;

            } else if (currentNode.value > value) {
                currentNode = currentNode.left;

            }
        }

        if (currentNode === null) {
            return null;

        } else if (currentNode.value !== value) {
            return null;

        } else {
            return currentNode;

        }
        
    }

    levelOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('A callback function is required.');

        }

        if (this.root === null) {
            return;

        }

        const queue = [this.root];

        while (queue.length > 0) {
            const currentNode = queue.shift();

            callback(currentNode);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);

            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);

            }
        }

    }

    inOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('A callback function is required.');

        }

        if (this.root === null) {
            return;

        }

        this.traverseInOrder(this.root, callback);        

    }

    traverseInOrder(node, callback) {
        if (node === null) {
            return;

        } 
        
        if (node.left !== null) {
            this.traverseInOrder(node.left, callback);

        }

        callback(node);

        if (node.right !== null) {
            this.traverseInOrder(node.right, callback);

        }

    }

    preOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('A callback function is required.');

        }

        if (this.root === null) {
            return;

        }

        this.traversePreOrder(this.root, callback);
    }

    traversePreOrder(node, callback) {
        if (node === null) {
            return;

        }
        
        callback(node);
        
        if (node.left !== null) {
            this.traversePreOrder(node.left, callback);

        }        

        if (node.right !== null) {
            this.traversePreOrder(node.right, callback);

        }
    }

    postOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('A callback function is required.');

        }

        if (this.root === null) {
            return;

        }

        this.traversePostOrder(this.root, callback);
    }

    traversePostOrder(node, callback) {
        if (node === null) {
            return;

        }        
        
        if (node.left !== null) {
            this.traversePostOrder(node.left, callback);

        }        

        if (node.right !== null) {
            this.traversePostOrder(node.right, callback);

        }

        callback(node);
    }

    height(value) {
        if (this.root === null) {
            return null;

        }

        let currentNode = this.root;

        while (currentNode !== null && currentNode.value !== value) {
            if (currentNode.value > value) {
                currentNode = currentNode.left;

            } else if (currentNode.value < value) {
                currentNode = currentNode.right;

            }

        }

        if (currentNode === null) {
            return null;

        } else if (currentNode.value === value) {
            return this.calculateHeight(currentNode);

        } else {
            return null;
        }

        
    }

    calculateHeight(node) {
        if (node === null) {
            return -1;

        }

        let leftHeight = this.calculateHeight(node.left);
        let rightHeigh = this.calculateHeight(node.right);

        return 1 + Math.max(leftHeight, rightHeigh);

    }

    depth(value) {
        if (this.root === null) {
            return null;

        }

        let currentNode = this.root;
        let count = 0;

        while (currentNode !== null && currentNode.value !== value){
            if (currentNode.value > value) {
                currentNode = currentNode.left;
                count += 1;

            } else if (currentNode.value < value) {
                currentNode = currentNode.right;
                count += 1;

            }

        }

        if (currentNode === null) {
            return null;

        } else if (currentNode.value === value) {
            return count;

        } else {
            return null;
            
        }

    }

    isBalanced() {
        return this.isNodeBalanced(this.root);

    }

    isNodeBalanced(node) {
        if (node === null) {
            return true;

        }

        let leftHeight = this.calculateHeight(node.left);
        let rightHeight = this.calculateHeight(node.right);
        let currentNodeHeight = Math.abs(leftHeight - rightHeight);

        if (currentNodeHeight > 1) {
            return false;

        }

        let leftSubtree = this.isNodeBalanced(node.left);
        let rightSubtree = this.isNodeBalanced(node.right);

        return leftSubtree && rightSubtree;

    }
    
}