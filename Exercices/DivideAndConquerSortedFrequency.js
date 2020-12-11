function sortedFrequency(inputArray, number) {
    let freqObj = {};
    freqObj[number] = 0
    findNumberRange(inputArray, number, 0, inputArray.length - 1, freqObj)

    return freqObj[number] === 0 ? -1 : freqObj[number];
}

function findNumberRange(inputArray, number, start, end, rangeObj = {}) {

    if (inputArray[start] > number || inputArray[end] < number) return;

    if (inputArray[start] === number && inputArray[end] === number) {
        rangeObj[number] += end - start + 1;
        return;
    }

    let mid = start + Math.floor((end - start) / 2);

    if (inputArray[mid] === number) {
        rangeObj[number] += 1
        if (inputArray[mid - 1] === number) {
            findNumberRange(inputArray, number, start, mid - 1, rangeObj);
        }

        if (inputArray[mid + 1] === number) {
            findNumberRange(inputArray, number, mid + 1, end, rangeObj);
        }

    } else {
        if (inputArray[mid - 1] >= number) {
            findNumberRange(inputArray, number, start, mid - 1, rangeObj);
        } else if (inputArray[mid + 1] <= number) {
            findNumberRange(inputArray, number, mid + 1, end, rangeObj);
        }
    }
}


//(2 - 5) + 1

// 1,1,2,2,2,2,3
// 1,1,2   2,2,2,3
//2,2, 2,3
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));
