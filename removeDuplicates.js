export function removeDuplicates(array) {
    let uniqueSet = new Set(array);

    let uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
};