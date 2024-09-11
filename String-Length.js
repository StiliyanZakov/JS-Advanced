function stringLength(arr1, arr2, arr3) {
  // Calculate the length of each string
  let sumLength = arr1.length + arr2.length + arr3.length;

  // Calculate the average length rounded down
  let averageLength = Math.floor(sumLength / 3);

  // Print the results
  console.log(sumLength);
  console.log(averageLength);
}

// Example usage:
stringLength("chocolate", "ice cream", "cake"); // Output: 22, 7
stringLength("pasta", "5", "22.3"); // Output: 10, 3
