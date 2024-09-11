function biggerHalf(arr) {
  // Sort the array in ascending order
  let sorted = arr.sort((a, b) => a - b);

  // Get the starting index of the second (bigger) half
  let halfIndex = Math.floor(sorted.length / 2);

  // Return the second half of the sorted array
  return sorted.slice(halfIndex);
}

// Test cases
console.log(biggerHalf([4, 7, 2, 5])); // Output: [5, 7]
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6])); // Output: [7, 14, 19, 19]
