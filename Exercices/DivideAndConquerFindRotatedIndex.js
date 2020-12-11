function findRotatedIndex(inputArray, number) {
    let mid = Math.floor(inputArray.length / 2);

    if (inputArray[mid] === number) {
        return mid;
    } else if (inputArray[0] <= number && inputArray[mid - 1] >= number) {
        return binarySearch(inputArray, number, 0, mid - 1);
    } else if (inputArray[mid + 1] <= number && inputArray[inputArray.length - 1] >= number) {
        return binarySearch(inputArray, number, mid + 1, inputArray.length - 1);
    }

    return -1;
}

function binarySearch(inputArray, number, start, end) {
    let mid = start + Math.floor((end - start) / 2);

    if (start > end) return -1;

    if (inputArray[mid] === number) {
        return mid;
    } else if (inputArray[mid - 1] >= number) {
        return binarySearch(inputArray, number, start, mid - 1);
    } else if (inputArray[mid + 1] <= number) {
        return binarySearch(inputArray, number, mid + 1, end);
    }
}


console.log(findRotatedIndex([3, 4, 1, 2], 4))
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8))
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3))
console.log(findRotatedIndex([37, 34, 66, 102, 10, 22], 14))
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12))
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16))