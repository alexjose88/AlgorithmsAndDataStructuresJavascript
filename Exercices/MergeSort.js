function mergeSort(array, comparator) {
    if (typeof comparator === "undefined") {
        comparator = function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            else return 0;
        };
    }

    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    return merge(
        mergeSort(array.slice(0, mid), comparator),
        mergeSort(array.slice(mid), comparator),
        comparator
    );
}

function merge(array1, array2, comparator) {
    if (typeof comparator === "undefined") {
        comparator = function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            else return 0;
        };
    }

    let i = 0;
    let j = 0;

    let resultArray = [];
    while (i < array1.length && j < array2.length) {
        if (comparator(array1[i], array2[j]) <= 0) {
            resultArray.push(array1[i]);
            i++;
        } else {
            resultArray.push(array2[j]);
            j++;
        }
    }

    while (i < array1.length) {
        resultArray.push(array1[i]);
        i++;
    }

    while (j < array2.length) {
        resultArray.push(array2[j]);
        j++;
    }

    return resultArray;
}

console.log(mergeSort([4, 20, 12, 10, 7, 9]));
console.log(mergeSort([0, -10, 7, 4]));
console.log(mergeSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]));


function strComp(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
}

console.log(mergeSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], strComp));

let kitties = [
    {name: "LilBub", age: 7},
    {name: "Garfield", age: 40},
    {name: "Heathcliff", age: 45},
    {name: "Blue", age: 1},
    {name: "Grumpy", age: 6}
];

function catComp(a, b) {
    return b.age - a.age;
}

console.log(mergeSort(kitties, catComp));
