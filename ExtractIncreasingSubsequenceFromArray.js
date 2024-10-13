function extractIncreasingSubset(arr) {
  let biggest = arr[0]; // Initialize the biggest element with the first element
  let result = arr.filter((num) => {
    if (num >= biggest) {
      biggest = num; // Update the biggest if the current number is equal or bigger
      return true;
    }
    return false; // Ignore numbers less than the current biggest
  });

  return result;
}

// Test cases
console.log(extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// Output: [1, 3, 8, 10, 12, 24]

console.log(extractIncreasingSubset([1, 2, 3, 4]));
// Output: [1, 2, 3, 4]

console.log(extractIncreasingSubset([20, 3, 2, 15, 6, 1]));
// Output: [20]
