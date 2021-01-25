function pivot(arr, comparator, start = 0, end = arr.length - 1) {
    if (typeof comparator == 'undefined') {
        comparator = function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
    }
    let pivotValue = arr[start];
    let swpIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (comparator(pivotValue, arr[i]) > 0) {
            swpIndex++;
            let tmp = arr[i];
            arr[i] = arr[swpIndex];
            arr[swpIndex] = tmp;
        }
    }

    let tmp = arr[start];
    arr[start] = arr[swpIndex];
    arr[swpIndex] = tmp;


    return swpIndex;
}

function pivotAlternative(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}


function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
    if (arr.length === 0) return [];
    if (typeof comparator == 'undefined') {
        comparator = function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
    }

    let pivotIndex = pivot(arr, comparator, start, end);

    if (pivotIndex > start) quickSort(arr, comparator, start, pivotIndex - 1);
    if (pivotIndex < end) quickSort(arr, comparator, pivotIndex + 1, end)

    return arr;
}


//Methods for the pivot
let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
console.log(pivot(arr1));
console.log(arr1.slice(0, 3).sort());

let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
console.log(pivot(arr2));
console.log(arr2.slice(0, 4).sort());

let arr3 = ["LilBub", "Garfield", "HeathCliff", "Blue", "Grumpy"];
let comparator = function (a, b) {
    return a.length - b.length;
}
console.log(pivot(arr3, comparator));
console.log(arr3.slice(0, 1).sort());

console.log("quick sort methods ----------------")

//Methods for the quicksort
let arr4 = [0, -10, 7, 4];
console.log(quickSort(arr4));

let arr5 = [1, 2, 3];
console.log(quickSort(arr5));

let arr6 = [4, 20, 12, 10, 7, 9];
console.log(quickSort(arr6));

let arr7 = [];
console.log(quickSort(arr7));