
// time complexity O(2^N) very bad
function fib(n) {
    if (n <= 0) return 0;
    if (n <= 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

//console.log(fib(40))

//1 1 2 3 5 8 13


// dynamic programing with memoization, time complexity O(N) better than the original version
function fibOptimized(n, memo = {}) {
    if(memo[n] !== undefined) return memo[n];
    if (n <= 0) return 0;
    if (n <= 2) {
        return 1;
    }

    let res = fibOptimized(n - 1, memo) + fibOptimized(n - 2, memo);
    memo[n] = res;
    return res;
}

console.log(fibOptimized(45))


// dynamic programing tabulation, time complexity O(N) and better space complexity
function fibTabulated(n) {
    if (n <= 2) return 1;

    let table = [0,1,1];
    for(let i = 3; i <= n; i++) {
        table[i] = table[i-2] + table[i-1];
    }

    return table[n];
}

console.log(fibTabulated(45));