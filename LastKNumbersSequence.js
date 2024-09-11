function lastKNumbersSequence(n, k) {
  let result = [1]; 

  for (let i = 1; i < n; i++) {
    
    let start = Math.max(0, i - k);
    let sum = result.slice(start, i).reduce((a, b) => a + b, 0);
    result.push(sum);
  }

  return result;
}

// Test cases
console.log(lastKNumbersSequence(6, 3)); // Output: [1, 1, 2, 4, 7, 13]
console.log(lastKNumbersSequence(8, 2)); // Output: [1, 1, 2, 3, 5, 8, 13, 21]
