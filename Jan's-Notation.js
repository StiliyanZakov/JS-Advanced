function jansNotation(input) {
  let operands = [];

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === "number") {
      // Save the number (operand)
      operands.push(input[i]);
    } else {
      // It's an operator; we need to apply it to the last two operands
      if (operands.length < 2) {
        // Not enough operands to perform the operation
        console.log("Error: not enough operands!");
        return;
      }

      // Retrieve the last two operands
      let b = operands.pop();
      let a = operands.pop();

      // Perform the operation and save the result
      switch (input[i]) {
        case "+":
          operands.push(a + b);
          break;
        case "-":
          operands.push(a - b);
          break;
        case "*":
          operands.push(a * b);
          break;
        case "/":
          operands.push(a / b);
          break;
      }
    }
  }

  // After processing all instructions, check the remaining operands
  if (operands.length === 1) {
    console.log(operands[0]); // Final result
  } else if (operands.length > 1) {
    console.log("Error: too many operands!"); // Too many operands left
  }
}

// Example usage:

jansNotation([3, 4, "+"]); // Output: 7
jansNotation([5, 3, 4, "*", "-"]); // Output: -7
jansNotation([7, 33, 8, "-"]); // Output: Error: too many operands!
jansNotation([15, "/"]); // Output: Error: not enough operands!
