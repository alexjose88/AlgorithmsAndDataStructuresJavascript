function selectionSort(inputArray, comparator) {
    if (typeof comparator !== "function") {
        comparator = defaultComp;
    }

    for (let i = 0; i < inputArray.length - 1; i++) {
        let minimIndex = i;
        for (let j = i + 1; j < inputArray.length; j++) {

            let comparison = comparator(inputArray[i], inputArray[j]);
            if (comparison > 0) {
                if (comparator(inputArray[minimIndex], inputArray[j]) > 0) minimIndex = j;
            }
        }

        if (comparator(inputArray[minimIndex], inputArray[i] ) < 0) {
            inputArray = swap(inputArray, i, minimIndex)
        }
    }

    return inputArray;
}

function defaultComp(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
}

function swap(inputArray, a, b) {
    let temp = inputArray[a];
    inputArray[a] = inputArray[b];
    inputArray[b] = temp;

    return inputArray;
}

console.log(selectionSort([0, -10, 7, 4]));
console.log(selectionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]));




function strComp(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
}

//console.log(selectionSort(["LilBub", "Garfield", "Heathcliff", "Blue","Grumpy"], strComp));

let kitties = [{name: "LilBub", age: 7}, {name: "Garfield", age: 40}, {name: "Heathcliff", age: 45}, {
    name: "Blue",
    age: 1
}, {name: "Grumpy", age: 6}];

function catComp(a, b) {
    return b.age - a.age;
}

console.log(selectionSort(kitties, catComp));