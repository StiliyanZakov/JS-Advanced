function isValidDistance(x1, y1, x2, y2) {
  // Function to calculate distance between two points
  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  // Function to check if a distance is an integer
  function isIntegerDistance(x1, y1, x2, y2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    return Number.isInteger(distance);
  }

  // Check the validity of each distance
  if (isIntegerDistance(x1, y1, 0, 0)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (isIntegerDistance(x2, y2, 0, 0)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (isIntegerDistance(x1, y1, x2, y2)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

// Example 1
isValidDistance(3, 0, 0, 4);

// Example 2
isValidDistance(2, 1, 1, 1);
