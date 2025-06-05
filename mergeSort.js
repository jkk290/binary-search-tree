export function mergeSort(array){
    if (array.length === 1) {
        return array;
    } else {
        let midPoint = Math.floor(array.length / 2);
        let leftHalf = array.slice(0, midPoint);
        let rightHalf = array.slice(midPoint);

        let sortedLeft = mergeSort(leftHalf);
        let sortedRight = mergeSort(rightHalf);

        return merge(sortedLeft, sortedRight);
    }

}

function merge(sortedLeft, sortedRight) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while ((leftIndex < sortedLeft.length) && (rightIndex < sortedRight.length)) {
        if (sortedLeft[leftIndex] < (sortedRight[rightIndex])) {
            sortedArray.push(sortedLeft[leftIndex]);
            leftIndex++;
        } else if (sortedLeft[leftIndex] > (sortedRight[rightIndex])) {
            sortedArray.push(sortedRight[rightIndex]);
            rightIndex++;
        } else if (sortedLeft[leftIndex] === (sortedRight[rightIndex])) {
            sortedArray.push(sortedLeft[leftIndex]);
            leftIndex++;
            sortedArray.push(sortedRight[rightIndex]);
            rightIndex++;
        }
    }

    
    if (leftIndex < sortedLeft.length) {
        sortedArray = sortedArray.concat(sortedLeft.slice(leftIndex));
    }
    if (rightIndex < sortedRight.length) {
        sortedArray = sortedArray.concat(sortedRight.slice(rightIndex));
    }

    return sortedArray;

};