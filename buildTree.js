import { Node } from './node.js';
import { mergeSort } from './mergeSort.js'
import { removeDuplicates } from './removeDuplicates.js';

export function buildTree(array) {
    let sortedArray = mergeSort(array);

    let uniqueArray = removeDuplicates(sortedArray);

    return recursiveBuilder(uniqueArray, 0, uniqueArray.length -1);

};


function recursiveBuilder(array, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return null;
    }

    let midPointIndex = Math.floor((startIndex + endIndex) / 2);

    let newNode = new Node(array[midPointIndex]);

    newNode.left = recursiveBuilder(array, startIndex, midPointIndex - 1);
    newNode.right = recursiveBuilder(array, midPointIndex + 1, endIndex);

    return newNode;

    
}