function diagonalAttack(input) {
  // Parse the input into a matrix of numbers
  let matrix = input.map((row) => row.split(" ").map(Number));

  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  let size = matrix.length;

  // Calculate the sums of the main and secondary diagonals
  for (let i = 0; i < size; i++) {
    mainDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][size - 1 - i];
  }

  // If the sums of both diagonals are equal
  if (mainDiagonalSum === secondaryDiagonalSum) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // Replace non-diagonal elements with the diagonal sum
        if (i !== j && i !== size - 1 - j) {
          matrix[i][j] = mainDiagonalSum;
        }
      }
    }
  }

  // Print the matrix with each row separated by space
  matrix.forEach((row) => console.log(row.join(" ")));
}

// Test cases
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
// Output:
// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1

diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
// Output:
// 1 1 1
// 1 1 1
// 1 1 0
