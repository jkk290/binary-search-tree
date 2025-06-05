import { Node } from './node.js';
import { Tree } from './tree.js';
import { mergeSort } from './mergeSort.js'
import { removeDuplicates } from './removeDuplicates.js';

export function buildTree(array) {
    let sortedArray = mergeSort(array);

    let uniqueArray = removeDuplicates(sortedArray);

};
