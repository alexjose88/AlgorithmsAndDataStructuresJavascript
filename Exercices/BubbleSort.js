function bubbleSort(inputArray, comparator) {
    if (typeof comparator !== "function") {
        comparator = defaultComp;
    }

    for (let i = inputArray.length; i > 0; i--) {
        let noSortingIteration = true;

        for (let j = 0; j < i - 1; j++) {

            let comparison = comparator(inputArray[j], inputArray[j+1]);
            if (comparison > 0) {
                inputArray = swap(inputArray, j, j+1);
                noSortingIteration = false;
            }
        }

        if(noSortingIteration) {
            break;
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


//console.log(bubbleSort([4,3,5,3,43,232,4,34,232,32,4,35,34,23,2,453,546,75,67,4342,32]));
//console.log(bubbleSort([0, -10, 7, 4]));


function strComp(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
}
//console.log(bubbleSort(["LilBub", "Garfield", "Heathcliff", "Blue","Grumpy"], strComp));

let kitties = [{name:"LilBub", age:7}, {name : "Garfield", age:40}, {name : "Heathcliff", age:45}, {name : "Blue", age:1},{name : "Grumpy", age: 6}];

function catComp(a, b) {
    return b.age - a.age;
}

console.log(bubbleSort(kitties, catComp));