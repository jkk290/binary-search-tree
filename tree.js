import { buildTree } from "./buildTree.js";

export class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }
    
}