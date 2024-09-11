function circleArea(input) {
  // Check if the input is a number
  if (typeof input === "number") {
    // Calculate the area of the circle
    let area = Math.PI * Math.pow(input, 2);
    // Print the area rounded to two decimal places
    console.log(area.toFixed(2));
  } else {
    // Handle non-number input
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }
}

// Example usage:
circleArea(5); // Output: 78.54
circleArea("name"); // Output: We can not calculate the circle area, because we receive a string.
