function equalNeighbors(matrix) {
  let pairs = 0;

  // Iterate over the rows and columns of the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // Check the right neighbor
      if (
        col < matrix[row].length - 1 &&
        matrix[row][col] === matrix[row][col + 1]
      ) {
        pairs++;
      }

      // Check the bottom neighbor
      if (
        row < matrix.length - 1 &&
        matrix[row][col] === matrix[row + 1][col]
      ) {
        pairs++;
      }
    }
  }

  return pairs;
}

// Test cases
console.log(
  equalNeighbors([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"],
  ])
); // Output: 1

console.log(
  equalNeighbors([
    ["test", "yes", "yo", "ho"],
    ["well", "done", "yo", "6"],
    ["not", "done", "yet", "5"],
  ])
); // Output: 2
