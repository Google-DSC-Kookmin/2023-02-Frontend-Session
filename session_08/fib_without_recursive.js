count = 0

function fibonacci(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  
  count++;
  return fibonacci(num-1) + fibonacci(num-2);
}

fibonacci(10);
console.log(count);
