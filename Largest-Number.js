function largestNumber(num1, num2, num3) {
  // Find the largest number using Math.max()
  let result = Math.max(num1, num2, num3);

  // Print the result
  console.log(`The largest number is ${result}.`);
}

// Example usage:
largestNumber(5, -3, 16); // Output: The largest number is 16.
largestNumber(-3, -5, -22.5); // Output: The largest number is -3.
