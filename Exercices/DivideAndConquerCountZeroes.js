function countZeroes(inputArray) {
    let firstIndexWithZero = findFirstIndex(inputArray, 0, inputArray.length - 1);

    if (firstIndexWithZero >= 0) {
        return inputArray.length - firstIndexWithZero;
    }

    return 0;
}

function findFirstIndex(inputArray, start, end) {
    if (inputArray[start] === 0) return start;
    if (inputArray[end] === 1) return -1;

    let mid = Math.floor((end - start) / 2) + start;

    if (inputArray[mid] === 0) {
        if (inputArray[mid - 1] === 1) return mid;
    }

    if (inputArray[mid] === 0) return findFirstIndex(inputArray, start, mid);
    else return findFirstIndex(inputArray, mid + 1, end);
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]));
console.log(countZeroes([1, 0, 0, 0, 0]));
console.log(countZeroes([0, 0, 0]));
console.log(countZeroes([1, 1, 1, 1]));