function sumOfNumbers(n, m) {
  // Parse the input strings as numbers
  let num1 = Number(n);
  let num2 = Number(m);

  // Declare a variable to store the sum
  let result = 0;

  // Use a for loop to iterate from num1 to num2 and add the numbers
  for (let i = num1; i <= num2; i++) {
    result += i;
  }

  // Print the result
  console.log(result);
  
}

// Example usage:
sumOfNumbers("1", "5"); // Output: 15
sumOfNumbers("-8", "20"); // Output: 174
