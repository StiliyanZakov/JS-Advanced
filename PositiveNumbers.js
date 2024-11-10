function negativePositiveNumbers(arr) {
  let result = [];

  for (let num of arr) {
    if (num < 0) {
      result.unshift(num); // Add negative numbers to the front
    } else {
      result.push(num); // Add positive numbers and 0 to the end
    }
  }

  
  result.forEach((element) => console.log(element));
}

// Test cases
negativePositiveNumbers([7, -2, 8, 9]); // Output: -2, 7, 8, 9
negativePositiveNumbers([3, -2, 0, -1]); // Output: -1, -2, 3, 0
