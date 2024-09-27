function diagonalSums(matrix) {
  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    mainDiagonalSum += matrix[i][i]; // Sum for the main diagonal
    secondaryDiagonalSum += matrix[i][matrix.length - 1 - i]; // Sum for the secondary diagonal
  }

  console.log(mainDiagonalSum + " " + secondaryDiagonalSum);
}

// Test cases
diagonalSums([
  [20, 40],
  [10, 60],
]); // Output: 80 50
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]); // Output: 99 25
