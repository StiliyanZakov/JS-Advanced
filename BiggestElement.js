function biggestElement(matrix) {
  // Flatten the 2D matrix into a single array and find the maximum value
  return Math.max(...matrix.flat());
}

// Test cases
console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
); // Output: 145
console.log(
  biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
); // Output: 33
