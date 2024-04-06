count = 0

// TODO
// 1. memoization
// 2. tabulation


function memoization(n, memo){
  if (memo[n] !== undefined)
    return memo[n];
  // memoization
  count++;
  memo[n] = memoization(n-1, memo) + memoization(n-2, memo);
  return memo[n]
}

function fibonacci(n) {
  let memo = [0, 1]
  
  return memoization(n, memo);
}

fibonacci(10);
console.log(count);
