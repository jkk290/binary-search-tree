import { Node } from './node.js';
import { Tree } from './tree.js';
import { mergeSort } from './mergeSort.js'
import { removeDuplicates } from './removeDuplicates.js';

export function buildTree(array) {
    let sortedArray = mergeSort(array);

    let uniqueArray = removeDuplicates(sortedArray);

};


function recursiveBuilder(array, startIndex, endIndex) {
    if (startIndex < endIndex) {
        return null;
    }

    let midPoint = Math.floor(array.length / 2);

    let newNode = new Node(midPoint);
}