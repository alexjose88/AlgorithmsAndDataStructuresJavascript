function merge(array1, array2, comparator) {
    if (typeof comparator === "undefined") {
        comparator = function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            else return 0;
        }
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

let array1 = [1, 3, 4, 5];
let array2 = [2, 4, 6, 8];

console.log(merge(array1, array2));
console.log(array1);
console.log(array2);

console.log("---------");

let array3 = [-2, -1, 0, 4, 5, 6];
let array4 = [-3, -2, -1, 2, 3, 5, 7, 8];

console.log(merge(array3, array4));
console.log(array3);
console.log(array4);

