function aggregateElements(arr) {
  // Calculate the sum of all elements
  const sum = arr.reduce((a, b) => a + b, 0);

  // Calculate the sum of the inverse values (1/ai)
  const inverseSum = arr.reduce((a, b) => a + 1 / b, 0);

  // Concatenate the string representations of all elements
  const concatenated = arr.reduce((a, b) => a + b.toString(), "");

  // Print the results
  console.log(sum);
  console.log(inverseSum);
  console.log(concatenated);
}

// Example usage:
aggregateElements([1, 2, 3]); // Output: 6
//         1.8333333333333333
//         123
aggregateElements([2, 4, 8, 16]); // Output: 30
//         0.9375
//         24816
