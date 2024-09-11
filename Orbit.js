function createOrbit(input) {
  const [width, height, starX, starY] = input;

  // Initialize an empty matrix
  let matrix = Array.from({ length: height }, () => Array(width).fill(0));

  // Fill the matrix with the orbit values
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      // Calculate the distance from the star (Manhattan distance)
      matrix[row][col] =
        Math.max(Math.abs(row - starX), Math.abs(col - starY)) + 1;
    }
  }

  // Print the resulting matrix
  matrix.forEach((row) => console.log(row.join(" ")));
}

// Test cases
createOrbit([4, 4, 0, 0]);
// Output:
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4

createOrbit([5, 5, 2, 2]);
// Output:
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

createOrbit([3, 3, 2, 2]);
// Output:
// 3 3 3
// 3 2 2
// 3 2 1
