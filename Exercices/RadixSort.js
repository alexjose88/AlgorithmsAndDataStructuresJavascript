function getDigit(num, i) {
    return Math.floor(num / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    return num.toString().length;
}

function mostDigits(nums) {
    let max = 0;
    nums.forEach(function (num) {
        let numDigits = digitCount(num);
        if (numDigits > max) max = numDigits;
    })

    return max;
}

function radixSort(nums) {

    for (let i = 0; i < mostDigits(nums); i++) {
        let buffer = Array.from({length: 10}, () => []);
        for(let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            buffer[digit].push(nums[j]);
        }
        nums = [].concat(...buffer);
    }

    return nums;
}

console.log("getDigit------");
console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));

console.log("digitCount-----");
console.log(digitCount(12345));
console.log(digitCount(12345));

console.log(mostDigits([1, 11, 111]));

console.log("Radix sort-------");

console.log(radixSort([8, 6, 1, 12]));