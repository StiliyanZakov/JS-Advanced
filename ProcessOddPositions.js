function processOddPositions(arr) {
  let result = arr
    .filter((_, index) => index % 2 !== 0) // Get elements at odd positions
    .map((x) => x * 2) // Double them
    .reverse(); // Reverse the order

  console.log(result.join(" ")); // Print them separated by space
}

// Test cases
processOddPositions([10, 15, 20, 25]); // Output: 50 30
processOddPositions([3, 0, 10, 4, 7, 3]); // Output: 6 8 0
