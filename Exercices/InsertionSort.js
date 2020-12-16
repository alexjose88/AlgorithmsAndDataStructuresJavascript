function insertionSort(inputArray, comparator) {
    if (typeof comparator === "undefined") {
        comparator = defaultComp;
    }

    if (inputArray.length < 2) return inputArray;

    for (let pivot = 1; pivot < inputArray.length; pivot++) {
        let pivotValue = inputArray[pivot];
        for (let i = pivot - 1; i >= 0 && comparator(pivotValue, inputArray[i]) < 0; i--) {
            let temp = inputArray[i];
            inputArray[i] = inputArray[i+1];
            inputArray[i+1] = temp;
        }
    }

    return inputArray;
}


function defaultComp(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
}

function strComp(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
}

console.log(insertionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]));

console.log(insertionSort([0, -10, 7, 4]));

console.log(insertionSort(["LilBub", "Garfield", "Heathcliff", "Blue","Grumpy"], strComp));

let kitties = [{name: "LilBub", age: 7}, {name: "Garfield", age: 40}, {name: "Heathcliff", age: 45}, {
    name: "Blue",
    age: 1
}, {name: "Grumpy", age: 6}];

function catComp(a, b) {
    return b.age - a.age;
}

console.log(insertionSort(kitties, catComp));

