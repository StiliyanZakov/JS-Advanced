function squareOfStars(size = 5) {
  // Loop through to print each row
  for (let i = 0; i < size; i++) {
    console.log("* ".repeat(size).trim());
  }
}

// Example usage:
squareOfStars(1); // Output: *
squareOfStars(2); // Output: * *
//          * *
squareOfStars(5); // Output: * * * * *
//          * * * * *
//          * * * * *
//          * * * * *
//          * * * * *
squareOfStars(7); // Output: * * * * * * *
//          * * * * * * *
//          * * * * * * *
//          * * * * * * *
//          * * * * * * *
//          * * * * * * *
//          * * * * * * *
